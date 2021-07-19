import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from './../model/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  constructor() {
    this.todos = [
      {
        id: '101',
        title: 'Learn Javascript',
        isComplete: true,
        date: new Date(),
      },
      {
        id: '102',
        title: 'Learn Typescript',
        isComplete: true,
        date: new Date(),
      },
      {
        id: '103',
        title: 'Learn Angular',
        isComplete: false,
        date: new Date(),
      },
    ];
  }

  getTodos() {
    return of(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  changeTodo(todo: Todo) {
    this.todos.map((oneTodo) => {
      if (oneTodo.id === todo.id) {
        todo.isComplete = !todo.isComplete;
      }
    });
  }

  deleteTodo(todo: Todo) {
    const indexOfTodo = this.todos.findIndex(
      (currentObject) => currentObject.id === todo.id
    );
    this.todos.splice(indexOfTodo, 1);
  }
}
