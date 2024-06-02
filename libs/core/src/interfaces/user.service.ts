import { User } from "./user.interface";

export interface UserService {
  register(email: string, password: string, displayName: string): Promise<User>;

  login(email: string, password: string): Promise<User>;

  logout(): Promise<void>;
}
