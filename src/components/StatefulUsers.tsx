import { useState, useEffect } from "react";
import StatelessUsers from "./StatelessUsers";
import type { UserInterface } from "../types/User.interface";

const StatefulUsers = () => {
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error(`Помилка: ${res.status}`);
        const data = await res.json();
        setUsers(data);
        setError(null);
      } catch (err: any) {
        setError(err.message || "Сталася невідома помилка");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="text-center">Завантаження...</p>;
  if (error) return <p className="text-center text-danger">{error}</p>;

  return (
    <div className="container py-5 ">
      <div className="card shadow p-4">
        <h1 className="text-center mb-4 text-primary">Users list</h1>
        <StatelessUsers users={users} />
      </div>
    </div>
  );
};

export default StatefulUsers;
