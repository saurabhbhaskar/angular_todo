import { of } from 'rxjs';
import { Todo } from '../model/Todo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        id: '130',
        title: 'Learn C++',
        isCompleted: true,
        date: new Date(),
      },
      {
        id: '13000',
        title: 'Make App',
        isCompleted: true,
        date: new Date(),
      },
      {
        id: '1300000',
        title: 'Complete Todo App',
        isCompleted: false,
        date: new Date(),
      },
    ];
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  getTodos() {
    return of(this.todos);
  }

  changeStatus(todo: Todo) {
    this.todos.map((singleTodo) => {
      if (singleTodo.id == todo.id) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
  }

  deleteTodo(todo: Todo) {
    const indexofTodo = this.todos.findIndex(
      (currentObj) => currentObj.id === todo.id
    );
    this.todos.splice(indexofTodo, 1);
    console.log(this.todos);
  }
}


