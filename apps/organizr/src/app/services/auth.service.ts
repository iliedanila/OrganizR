import { Injectable } from "@angular/core";
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  authState,
} from "@angular/fire/auth";
import { UserCredential } from "firebase/auth";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private auth: Auth) {}

  async register(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  async login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async logout(): Promise<void> {
    return signOut(this.auth);
  }

  getCurrentUser(): Observable<any> {
    return authState(this.auth);
  }

  isLoggedIn(): boolean {
    return !!this.auth.currentUser;
  }
}