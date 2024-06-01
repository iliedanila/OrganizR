import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { TaskDetailComponent } from "./components/task-detail/task-detail.component";

export const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "tasks", component: TaskListComponent },
  { path: "tasks/:id", component: TaskDetailComponent },
  { path: "", redirectTo: "/tasks", pathMatch: "full" },
];
