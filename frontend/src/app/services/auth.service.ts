import { Injectable } from "@angular/core";
import { Auth } from "@angular/fire/auth";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private auth: Auth) {}

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  isLoggedIn(): boolean {
    const user = this.auth.currentUser;
    return user !== null;
  }

  logout() {
    return this.auth.signOut();
  }
}
