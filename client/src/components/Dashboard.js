import { useEffect, useState } from "react";
import API from "../api/api";

export default function Dashboard() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    API.get("/users/dashboard")
      .then((res) => setMessage(res.data.message))
      .catch(() => setMessage("Access denied"));
  }, []);

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <p className="mt-4">{message}</p>
    </div>
  );
}
