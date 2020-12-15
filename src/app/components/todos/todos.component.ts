import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Models/Todo';
import { TodoService } from "../../services/todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor(private ts:TodoService) { }

  ngOnInit(): void {
    this.ts.getTodos().subscribe(todos =>{
        this.todos = todos;
    });
  }

  deleteTodo(todo:Todo){
      this.todos = this.todos.filter(t => t.id !== todo.id);
      this.ts.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo){
    this.ts.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    })
  }

}
