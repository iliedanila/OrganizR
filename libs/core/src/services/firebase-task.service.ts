import { db } from "../config/firebase";
import { Task } from "../interfaces/task.interface";

export class FirebaseTaskService {
  private collectionName = "tasks";

  async createTask(task: Task): Promise<void> {
    if (!task.id) {
      throw new Error("Task ID is required");
    }
    await db.collection(this.collectionName).doc(task.id).set(task);
  }

  async getTasks(): Promise<Task[]> {
    const snapshot = await db.collection(this.collectionName).get();
    return snapshot.docs.map((doc) => doc.data() as Task);
  }

  async updateTask(task: Task): Promise<void> {
    if (!task.id) {
      throw new Error("Task ID is required");
    }
    await db
      .collection(this.collectionName)
      .doc(task.id)
      .update(task as { [x: string]: any });
  }

  async deleteTask(id: string): Promise<void> {
    await db.collection(this.collectionName).doc(id).delete();
  }
}
