import { User } from "../entities/User";

const API_URL = "http://localhost:8080/users"

export const UserService = {
    getAll: async (): Promise<User[]> => {
        try {
          const response = await fetch(API_URL);
          if (!response.ok) throw new Error("Failed to fetch users");
          const data = await response.json();
    
          return data.map((user: any) => ({
            id: user.id,
            name: user.Name,  
            email: user.Email, 
            age: user.Age,     
          }));
        } catch (error) {
          console.error("Error fetching users:", error);
          return [];
        }
      },

    getById: async (id: number): Promise<User> =>{
        const response = await fetch(`${API_URL}/${id}`);
        return response.json();
    },
    create: async (user: Omit<User, "id">): Promise<User> => {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });
        return response.json();
      },
    
      update: async (user: User): Promise<User> => {
        const response = await fetch(`${API_URL}/${user.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });
        return response.json();
      },
    
      delete: async (id: number): Promise<void> => {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      },
}