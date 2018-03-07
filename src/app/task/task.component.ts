import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  tasks: any[] = [];
  constructor(private _taskService: TaskService) {
    this.getTasks();
   }

   ngOnInit() {
     console.log(this._taskService)
     this.tasks = this._taskService.tasks;
   }
  getTasks(){
    console.log("TaskComponent - Getting Tasks")
    this._taskService.getTasks()
    // .toPromise()
    // .then(data => this.tasks = data)
    // .catch( err => err)
  }
  updateTasks(){
  	// Service call to update our tasks
  	this.getTasks();
  }

}
