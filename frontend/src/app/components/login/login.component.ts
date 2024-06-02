import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
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
      await this.router.navigate(["/tasks"]);
    } catch (error) {
      console.error("Login failed", error);
    }
  }
}
