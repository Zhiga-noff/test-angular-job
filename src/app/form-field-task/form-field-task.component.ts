import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FetchTaskService } from '../fetch-task.service';
import { UserInterface } from '../../interfaces/user-interface';

@Component({
  selector: 'app-form-field-task',
  templateUrl: './form-field-task.component.html',
  styleUrls: ['./form-field-task.component.scss'],
})
export class FormFieldTaskComponent {
  @Input() taskList: UserInterface[];
  @Output() taskListUpdate: EventEmitter<UserInterface[]> = new EventEmitter();
  @Output() searchValue: EventEmitter<string> = new EventEmitter();


  originalNameList: UserInterface[] = [];
  taskValue: string = '';
  activeSetFlag: boolean = true;
  reverseFlag: 'a > b' | 'b > a' | 'random' = 'random';

  constructor(private _fetchTaskService: FetchTaskService) {}

  SubmitTask() {
      this.searchValue.emit(this.taskValue);
  }

  onChangeInput(value: string | null = '') {
    this.taskValue = value;
  }

  closeSearch() {
    this.taskValue = '';
    this._fetchTaskService.getTask().subscribe((tasks) => {
      this.taskListUpdate.emit(tasks);
    });
  }

  revers() {
    switch (this.reverseFlag) {
      case 'a > b': {
        this.reverseFlag = 'b > a';
        this.taskList.reverse();
        this.taskListUpdate.emit(this.taskList);
        return;
      }
      default: {
        this.reverseFlag = 'a > b';
        this.taskList.sort((a: UserInterface, b: UserInterface) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          if (nameA > nameB) {
            return 1;
          } else if (nameA < nameB) {
            return -1;
          } else {
            return 0;
          }
        });
        this.taskListUpdate.emit(this.taskList);
      }
    }
  }

  activeUsers() {
    if (!this.originalNameList.length) {
      this.originalNameList= this.taskList;
    }

    if (this.activeSetFlag) {
      this.taskListUpdate.emit(this.originalNameList.filter((task: UserInterface) => task.active));
      this.activeSetFlag = false
      return
    }
    console.log(this)
    this.taskListUpdate.emit(this.originalNameList.filter((task: UserInterface) => !task.active));
    this.activeSetFlag = true
  }
}
