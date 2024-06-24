import { Injectable } from "@angular/core";
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  UserCredential,
} from "@angular/fire/auth";
import { Observable } from "rxjs";
import { authState } from "rxfire/auth";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private auth: Auth,
    private cookieService: CookieService,
  ) {}

  async register(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  async login(email: string, password: string): Promise<UserCredential> {
    const userCredential = await signInWithEmailAndPassword(
      this.auth,
      email,
      password,
    );
    const idToken = await userCredential.user.getIdToken();
    this.cookieService.set("auth_token", idToken, 1); // Expires in 1 day
    return userCredential;
  }

  async logout(): Promise<void> {
    this.cookieService.delete("auth_token");
    return signOut(this.auth);
  }

  getCurrentUser(): Observable<any> {
    return authState(this.auth);
  }

  isLoggedIn(): boolean {
    const token = this.cookieService.get("auth_token");
    return !!token;
  }
}
