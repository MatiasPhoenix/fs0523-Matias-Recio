import { Component } from '@angular/core';
import { ITodoList } from '../../Models/todo-list';
import { TodoListService } from '../../todo-list.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

todoArr:ITodoList[] = [];

constructor(public todoSvc:TodoListService){}

newTodoElement:ITodoList = {
  title:"",
  completed: true
};

ngOnInit(){
  this.todoSvc.getAll().then(todoArr => this.todoArr = todoArr)
}
// saveToDo(){
//   this.todoSvc.createToDo()
// }



}



