import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

export async function uploadImage(file) {
  const fileRef = ref(
    storage,
    `products/${Date.now()}-${file.name}`
  );

  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);
}
