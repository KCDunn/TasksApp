import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {
  tasks: Array<any> = [
    {id: 1, title: 'First Task', completed: false, what: 'You need to brew some coffee!' },
    {id: 2, title: 'Second Task', comleted: false, what: 'Read some programming docs.' },
    {id: 3, title: 'Third Task', completed: false, what: 'Complete this assignment!' },
    {id: 4, title: 'Fourth Task', completed: false, what: 'Get outside and take a walk.' }
  ]
  getTasks(){
    
  }
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
