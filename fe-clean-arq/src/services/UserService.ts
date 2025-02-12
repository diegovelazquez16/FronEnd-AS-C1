import axios from "axios";
import { User } from "../entities/User";

const API_URL = "http://localhost:8080/users";

export const UserService = {
  // Obtener todos los usuarios
  getAll: async (): Promise<User[]> => {
    try {
      const response = await axios.get(API_URL);
      return response.data.map((item: any) => ({
        id: item.ID,
        name: item.Name,
        email: item.Email,
        age: item.Age,
      }));
    } catch (error) {
      console.error("Error al buscar usuarios:", error);
      throw new Error("Fech fallido de usuarios");
    }
  },

  // Obtener un usuario por su ID
  getById: async (id: number): Promise<User> => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      const data = response.data;
      return {
        id: data.ID,
        name: data.Name,
        email: data.Email,
        age: data.Age,
      };
    } catch (error) {
      console.error("Error al buscar usuario:", error);
      throw new Error("Falla de fetch de users");
    }
  },

  create: async (user: Omit<User, "id">): Promise<User> => {
    try {
      const response = await axios.post(API_URL, {
        Name: user.name,
        Email: user.email,
        Age: user.age,
      });
      const data = response.data;
      return {
        id: data.ID,
        name: data.Name,
        email: data.Email,
        age: data.Age,
      };
    } catch (error) {
      console.error("Error al crear usuario:", error);
      throw new Error("Falla al crear usuario");
    }
  },

  // Actualizar un usuario existente
  update: async (user: User): Promise<User> => {
    try {
      const response = await axios.put(`${API_URL}/${user.id}`, {
        ID: user.id,
        Name: user.name,
        Email: user.email,
        Age: user.age,
      });
      const data = response.data;
      return {
        id: data.ID,
        name: data.Name,
        email: data.Email,
        age: data.Age,
      };
    } catch (error) {
      console.error("Error al actalizar usuario:", error);
      throw new Error("Falla al actualizar usuario");
    }
  },

  delete: async (id: number): Promise<void> => {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      throw new Error("Falla al eliminar usuario");
    }
  },
};