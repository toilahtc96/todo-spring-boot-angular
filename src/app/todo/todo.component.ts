import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoDataService) { }
  todo: Todo
  id: number
  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.todo = new Todo(1,'Learn Default',true,new Date())
    this.todoService.retrieveTodo('htc', this.id).subscribe(
      data => this.todo = data,
      error => console.log(error)
    )
    
  }
  saveTodo() {
    console.log("save Todo");
  }
}
