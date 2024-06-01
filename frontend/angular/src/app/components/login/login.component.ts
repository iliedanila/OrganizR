import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service"; // Ensure the correct path
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  async login() {
    try {
      await this.authService.login(this.email, this.password);
      this.router.navigate(["/tasks"]);
    } catch (error) {
      console.error("Login failed", error);
    }
  }
}
