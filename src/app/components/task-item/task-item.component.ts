import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Task } from 'src/app/Task';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {}

  onDelete(task) {
    this.onDeleteTask.emit(this.task);
  }

  onToggle() {
    this.onToggleReminder.emit(this.task);
  }

}
