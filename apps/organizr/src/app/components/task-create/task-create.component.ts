import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TaskService } from "../../services/task.service";
import { Task } from "@organizr/core";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-task-create",
  templateUrl: "./task-create.component.html",
  styleUrls: ["./task-create.component.css"],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class TaskCreateComponent {
  task: Task = { id: "", title: "", description: "" };

  constructor(
    private taskService: TaskService,
    private router: Router,
  ) {}

  async createTask() {
    try {
      await this.taskService.addTask(this.task);
      await this.router.navigate(["/tasks"]);
    } catch (error) {
      console.error("Task creation failed", error);
    }
  }
}
