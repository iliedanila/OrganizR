import { Task } from "./task.interface";

export interface TaskService {
  createTask(task: Task): Promise<void>;

  getTasks(): Promise<Task[]>;

  updateTask(task: Task): Promise<void>;

  deleteTask(id: string): Promise<void>;
}
