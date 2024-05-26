import { IUser } from "../interfaces/user.interface";

export interface IUserService {
    register(email: string, password: string, displayName: string): Promise<IUser>;
    login(email: string, password: string): Promise<IUser>;
    logout(): Promise<void>;
}
