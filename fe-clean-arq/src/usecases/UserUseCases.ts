import { User } from "../entities/User";
import { UserService } from "../services/UserService";

export const UserUseCases ={
    fetchAllUsers: () => UserService.getAll(),

}