import { Component, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { TaskService } from "../../services/task.service";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { NgForOf } from "@angular/common";
import { Task } from "@organizr/core";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink, NgForOf],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  deleteTask(taskId: string): void {
    this.taskService
      .deleteTask(taskId)
      .then(() => {
        this.loadTasks();
      })
      .catch((error) => {
        console.error("Delete task failed", error);
      });
  }

  logout(): void {
    this.authService
      .logout()
      .then(() => {
        this.router.navigate(["/login"]);
      })
      .catch((error) => {
        console.error("Logout failed", error);
      });
  }
}
