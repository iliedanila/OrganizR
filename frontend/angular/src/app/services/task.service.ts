import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private collectionName = 'tasks';

  constructor(private firestore: AngularFirestore) {}

  getTasks(): Observable<Task[]> {
    return this.firestore.collection<Task>(this.collectionName).valueChanges();
  }

  createTask(task: Task): Promise<void> {
    return this.firestore
      .collection(this.collectionName)
      .doc(task.id)
      .set(task);
  }

  updateTask(task: Task): Promise<void> {
    return this.firestore
      .collection(this.collectionName)
      .doc(task.id)
      .update(task);
  }

  deleteTask(taskId: string): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(taskId).delete();
  }
}
