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

newTodoElement:ITodoList = {
  title:"",
  completed: false
};



ngOnInit(){
  this.todoSvc.getAll()
  .then(todo => this.todoArr = todo.filter(todo => !todo.completed))
}

saveToDo(){
  this.todoArr.push(this.newTodoElement);
  this.todoSvc.createToDo(this.newTodoElement);
  this.ngOnInit()
  this.newTodoElement.title = '';
}

deleteTodo(id:number|undefined){
  if(!id)return
  this.todoSvc.getById(id).then(todo => {
  this.todoSvc.deleteToDo(id);
  this.todoArr = this.todoArr.filter(todoAr => todoAr.title !== todo.title);
  })
  }

changeTodo(id:number|undefined){
  if(!id)return
  this.todoSvc.getById(id).then(todo => {
  todo.completed = !todo.completed;
  this.todoSvc.updateToDo(todo);
  this.todoArr = this.todoArr.filter(todoAr => todoAr.title !== todo.title);
  })
}

}



