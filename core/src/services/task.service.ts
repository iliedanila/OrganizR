import { ITask } from "../interfaces/task.interface";

export interface ITaskService {
    createTask(task: ITask): Promise<void>;
    getTasks(): Promise<ITask[]>;
    updateTask(task: ITask): Promise<void>;
    deleteTask(id: string): Promise<void>;
}
