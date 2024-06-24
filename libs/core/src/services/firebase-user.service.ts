import { UserService } from "../interfaces/user.service";
import { User } from "../interfaces/user.interface";
import { auth } from "../config/firebase";

export class FirebaseUserService implements UserService {
  async register(
    email: string,
    password: string,
    displayName: string
  ): Promise<User> {
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

  async login(email: string, password: string): Promise<User> {
    // Firebase Admin SDK does not handle password authentication, this is done client-side
    // Example for client-side:
    // const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    const userRecord = await auth.getUserByEmail(email);
    return {
      uid: userRecord.uid,
      email: userRecord.email!,
      displayName: userRecord.displayName!,
    };
  }

  async logout(): Promise<void> {
    // Handle logout client-side
    // Example for client-side:
    // await firebase.auth().signOut();
  }
}
