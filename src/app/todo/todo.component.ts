import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoDataService,
    private router: Router) { }
  todo: Todo
  id: number
  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.todo = new Todo(this.id, 'Learn Default', true, new Date())
    if (this.id != -1) {
      this.todoService.retrieveTodo('htc', this.id).subscribe(
        data => this.todo = data,
        error => console.log(error)
      )
    }

  }
  saveTodo() {
    if (this.id === -1) {
      this.todoService.addTodo('htc', this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    } else {
      this.todoService.updateTodo('htc', this.id, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    }
  }
}
