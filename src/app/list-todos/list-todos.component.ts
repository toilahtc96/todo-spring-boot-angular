import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date) {

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos
  // [
  //   new Todo(1, 'Learn 1', false, new Date()),
  //   new Todo(2, 'Learn 2', false, new Date()),
  //   new Todo(3, 'Learn 3', false, new Date()),
  //   new Todo(4, 'Learn 4', false, new Date()),
  // ]
  // todo = {
  //   id: 1,
  //   description: 'lear spring boot'
  // }
  message: string
  constructor(private todoDataService: TodoDataService,
    private route: Router) { }

  ngOnInit() {
    this.getAll();
  }
  deleteTodo(id) {
    if (confirm('Xoa Todo Nay?')) {
      this.todoDataService.deleteTodoById('htc', id).subscribe(
        response => {
          this.message = `Xoa ${id} Thanh cong!`
          this.getAll()
        },
        error => console.log(error)
      )
    }
  }

  getAll() {
    this.todoDataService.retrieveAllTodos('htc').subscribe(
      response => this.todos = response,
      error => console.log(error)

    )
  }

  updateTodo(id) {
    this.route.navigate([`todos/${id}`])
  }
}
