import { useEffect, useState } from "react";
import API from "../api/api";

export default function AdminPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get("/users/all-users")
      .then((res) => setUsers(res.data))
      .catch(() => setUsers([]));
  }, []);

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Admin Panel</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((u) => (
            <li key={u._id} className="p-2 border-b">{u.name} — {u.role}</li>
          ))}
        </ul>
      ) : (
        <p>No access or no users found.</p>
      )}
    </div>
  );
}
