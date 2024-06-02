import { Injectable } from "@angular/core";
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  deleteDoc,
  doc,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Task } from "../../../../core/src/interfaces/task.interface";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  constructor(private firestore: Firestore) {}

  getTasks(): Observable<Task[]> {
    const tasksCollection = collection(this.firestore, "tasks");
    return collectionData(tasksCollection, { idField: "id" }) as Observable<
      Task[]
    >;
  }

  addTask(task: Task): Promise<void> {
    const tasksCollection = collection(this.firestore, "tasks");
    return addDoc(tasksCollection, task).then(() => {}); // Return void
  }

  deleteTask(taskId: string): Promise<void> {
    const taskDoc = doc(this.firestore, `tasks/${taskId}`);
    return deleteDoc(taskDoc);
  }
}
