import { IUserService } from "./user.service";
import { IUser } from "../interfaces/user.interface";
import { auth } from "../config/firebase";
import firebase from "firebase-admin";

class FirebaseUserService implements IUserService {
    async register(email: string, password: string, displayName: string): Promise<IUser> {
        const userRecord = await auth.createUser({
            email,
            password,
            displayName,
        });
        return {
            uid: userRecord.uid,
            email: userRecord.email!,
            displayName: userRecord.displayName!,
        };
    }

    async login(email: string, password: string): Promise<IUser> {
        const userRecord = await auth.getUserByEmail(email);
        return {
            uid: userRecord.uid,
            email: userRecord.email!,
            displayName: userRecord.displayName!,
        };
    }

    async logout(): Promise<void> {
        // Firebase Admin SDK doesn't handle user sessions, so typically this is handled on the client-side
    }
}

export const userService = new FirebaseUserService();
