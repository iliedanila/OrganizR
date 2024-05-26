import { ITaskService } from "./task.service";
import { ITask } from "../interfaces/task.interface";
import { db } from "../config/firebase";
import { v4 as uuidv4 } from "uuid";

class FirebaseTaskService implements ITaskService {
    private collectionName = "tasks";

    async createTask(task: ITask): Promise<void> {
        const id = uuidv4();
        await db
            .collection(this.collectionName)
            .doc(id)
            .set({ ...task, id });
    }

    async getTasks(): Promise<ITask[]> {
        const snapshot = await db.collection(this.collectionName).get();
        return snapshot.docs.map((doc) => doc.data() as ITask);
    }

    async updateTask(task: ITask): Promise<void> {
        await db.collection(this.collectionName).doc(task.id).update(task);
    }

    async deleteTask(id: string): Promise<void> {
        await db.collection(this.collectionName).doc(id).delete();
    }
}

export const taskService = new FirebaseTaskService();
