import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router, RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
  ],
})
export class LoginComponent {
  email = "";
  password = "";

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
