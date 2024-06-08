import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { TaskCreateComponent } from "./components/task-create/task-create.component";
import { AuthGuard } from "./guards/auth.guard";

export const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "tasks", component: TaskListComponent, canActivate: [AuthGuard] },
  {
    path: "tasks/create",
    component: TaskCreateComponent,
    canActivate: [AuthGuard],
  },
  { path: "**", redirectTo: "login" },
];
