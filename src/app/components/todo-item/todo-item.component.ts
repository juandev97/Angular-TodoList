import { Component, OnInit, Input } from '@angular/core';

import { TodoService, todoService } from "../../services/todo.service";
import { Todo } from 'src/app/Models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }
  
  setClasses(){
    let classes= {
      todo: true,
      'is-complete': this.todo.completado
    }

    return classes;
  }


  onToggle(todo){
    //ui
    todo.completado = !todo.completado;
    // service 
    this.todoService.toggleCompleted(todo).subscribe(todo =>
      console.log(todo));
  }

  onDelete(todo){

    console.log("delete");
  
  }
}
