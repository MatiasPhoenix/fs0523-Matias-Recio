import { Injectable } from '@angular/core';
import { ITodoList } from './Models/todo-list';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }
  apiUrl = "http://localhost:3000/todoList"

  getAll():Promise<ITodoList[]>{
    return fetch(this.apiUrl).then(response => response.json());
  }
  getById(id:number):Promise<ITodoList>{
    return fetch(this.apiUrl+`/${id}`).then(response => response.json());
  }
  createToDo(todo:ITodoList):Promise<ITodoList>{
    return fetch(this.apiUrl,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo)
    }).then(response => response.json());
  }
  updateToDo(todo:ITodoList):Promise<ITodoList>{
    return fetch(this.apiUrl+`${todo.id}`,{
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo)
    }).then(response => response.json());
  }
  deleteToDo(id:number):Promise<ITodoList>{
    return fetch(this.apiUrl+`/${id}`,{
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json());
  }
}
