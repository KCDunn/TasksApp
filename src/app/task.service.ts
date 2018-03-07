import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {
  tasks: Array<any> = [
    {id: 1, title: 'First Task', completed: false },
    {id: 2, title: 'Second Task', comleted: false },
    {id: 3, title: 'Third Task', completed: false }
  ]
  retrieveAll() {
    return this.tasks;
  }
  add(task: any) {
    this.tasks.push(task);
  }
  remove(task: any) {
    this.tasks.pop()
  }
  constructor() { }

}
