import { Component } from '@angular/core';
import { ITodoList } from '../../Models/todo-list';
import { TodoListService } from '../../todo-list.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

constructor(public todoSvc:TodoListService){}

todoArr:ITodoList[] = [];

// newTodoElement:ITodoList = {
//   title:"",
//   completed: true
// };

ngOnInit(){
  this.todoSvc.getAll().then(todoArr => this.todoArr = todoArr)
}


saveToDo(todo:ITodoList){
  this.todoSvc.createToDo(todo)
}




}



