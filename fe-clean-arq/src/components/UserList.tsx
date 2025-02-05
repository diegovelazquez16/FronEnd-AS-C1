import React, { useEffect, useState } from "react";
import { User } from "../entities/User";
import { UserUseCases } from "../usecases/UserUseCases";
import { UserForm } from "./UserForm";
import styles from "./UserList.module.css";

export const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const loadUsers = async () => {
    const data = await UserUseCases.fetchAllUsers();
    setUsers(data);
  };



  useEffect(() => {
    loadUsers();
  }, []);
  

  return (
    <div className={styles.container}>
      <h2>User List</h2>
      <UserForm user={selectedUser!} onSave={loadUsers} />
      <ul>
        {users.map((user) => (
          <li key={user.id} className={styles.userItem}>
            {user.name} - {user.email} - Age: {user.age}
            <div>
              <button
                className={`${styles.button} ${styles.edit}`}
                onClick={() => setSelectedUser(user)}
              >
                Edit
              </button>
              <button
                className={`${styles.button} ${styles.delete}`}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
