import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-details',
  template: `<div [ngClass]="{'completed': isClassVisible }">
              <p class="what">{{ task.what }}</p>
              <button class="a" (click)="isClassVisible = !isClassVisible;">Click to Complete</button>
              <button class="b" (click)="isClassVisible = !isClassVisible;">Click to mark Incomplete</button>
              <p class="on">{{ task.title }} has been completed.</p>
              <p class="off">{{ task.title }} is incomplete.</p>
            </div>`,
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  @Input() task:string = "";

  isClassVisible: false;
  
  
  
  constructor() {
    // this.task[]: any;
   }

  ngOnInit() {
  }

}
