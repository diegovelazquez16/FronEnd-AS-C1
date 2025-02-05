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


}