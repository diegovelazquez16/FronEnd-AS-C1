import React, { useState, useEffect } from "react";
import { User } from "../entities/User";
import { UserUseCases } from "../usecases/UserUseCases";

interface UserFormProps {
  user?: User;
  onSave: () => void;
}

export const UserForm: React.FC<UserFormProps> = ({ user, onSave }) => {
  const [formData, setFormData] = useState<Omit<User, "id">>({
    name: "",
    email: "",
    age: 0,
  });

  useEffect(() => {
    if (user) {
      setFormData({ name: user.name, email: user.email, age: user.age });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: name === "age" ? Number(value) : value }));
  };



  return (
    <form >
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
      <button type="submit">{user ? "Actualizar usuario" : "Crear usuario"}</button>
    </form>
  );
};
