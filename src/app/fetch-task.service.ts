import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root',
})
export class FetchTaskService {
  private apiUrl = 'http://localhost:1000/users';

  constructor(private _http: HttpClient) {}

  getTask(): Observable<UserInterface[]> {
    return this._http.get<UserInterface[]>(this.apiUrl);
  }

  deleteTask(idTask: number | string) {
    console.log(idTask);
    return this._http.delete(`${this.apiUrl}/${idTask}`);
  }

  addNewTask(newTask: UserInterface) {
    return this._http.post(this.apiUrl, newTask);
  }

  editTask(taskId: number | string, task: string) {
    return this._http.put(`${this.apiUrl}/${taskId}`, { title: task });
  }
}
