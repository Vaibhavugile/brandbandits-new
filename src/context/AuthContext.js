import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as fbSignOut,
  onAuthStateChanged
} from "firebase/auth";

import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp
} from "firebase/firestore";

import { auth, db } from "../firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);        // Firebase user
  const [profile, setProfile] = useState(null); // Firestore user
  const [loading, setLoading] = useState(true);

  /* ---------------------------------------
     AUTH STATE LISTENER
  --------------------------------------- */
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);

        const ref = doc(db, "users", firebaseUser.uid);
        const snap = await getDoc(ref);

        setProfile(snap.exists() ? snap.data() : null);
      } else {
        setUser(null);
        setProfile(null);
      }

      setLoading(false);
    });

    return unsub;
  }, []);

  /* ---------------------------------------
     SIGN IN
  --------------------------------------- */
  const signIn = async ({ email, password }) => {
    const cred = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    await setDoc(
      doc(db, "users", cred.user.uid),
      { lastLoginAt: serverTimestamp() },
      { merge: true }
    );
  };

  /* ---------------------------------------
     SIGN UP (DEFAULT ROLE = USER)
  --------------------------------------- */
  const signUp = async ({
    email,
    password,
    name,
    phone
  }) => {
    const cred = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await setDoc(doc(db, "users", cred.user.uid), {
      uid: cred.user.uid,
      email,
      name,
      phone,
      role: "user", // 👈 DEFAULT ROLE
      createdAt: serverTimestamp(),
      lastLoginAt: serverTimestamp()
    });
  };

  /* ---------------------------------------
     SIGN OUT
  --------------------------------------- */
  const signOut = async () => {
    await fbSignOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        signIn,
        signUp,
        signOut,
        isAdmin: profile?.role === "admin"
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
