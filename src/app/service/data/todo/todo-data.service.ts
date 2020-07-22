import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) { }

  retrieveAllTodos(username) {
    return this.httpClient.get<Todo>(`http://localhost:8080/users/${username}/todos`);
  }
  deleteTodoById(username, id) {
    return this.httpClient.delete<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  retrieveTodo(username,id) {
    return this.httpClient.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }
}
