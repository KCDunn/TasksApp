import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent{
  @Input() tasks: any[];
  @Output() updatedTasksList = new EventEmitter();
  constructor() { }

  onSomveEvent(){
    console.log("taskListComponent - onSomeEvent()")
    this.updatedTasksList.emit();
  }


}
