import { User } from "../entities/User";
import { UserService } from "../services/UserService";

export const UserUseCases ={
    fetchAllUsers: () => UserService.getAll(),
    fetchUserById: (id: number) => UserService.getById(id),
    createUser: (user: Omit<User, "id">) => UserService.create(user),
    updateUser: (id: User) => UserService.update(id),
    deleteUser: (id: number) => UserService.delete(id),
}