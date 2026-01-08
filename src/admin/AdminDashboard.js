// src/admin/AdminDashboard.js
import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminDashboard() {
  const { profile } = useAuth();

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* SIDEBAR */}
      <aside
        style={{
          width: 240,
          padding: 24,
          borderRight: "1px solid #eee"
        }}
      >
        <h2>Admin</h2>
        <p style={{ fontSize: 13, color: "#666" }}>
          {profile?.name}
        </p>

        <nav style={{ marginTop: 20 }}>
          <Link to="/admin/products">📦 Products</Link><br />
          <Link to="/admin/orders">🧾 Orders</Link><br />
          <Link to="/admin/users">👥 Users</Link>
        </nav>
      </aside>

      {/* PAGE CONTENT */}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}
