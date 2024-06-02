import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router, RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
  ],
})
export class RegisterComponent {
  email: string = "";
  password: string = "";

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  async register() {
    try {
      await this.authService.register(this.email, this.password);
      this.router.navigate(["/tasks"]);
    } catch (error) {
      console.error("Registration failed", error);
    }
  }
}
