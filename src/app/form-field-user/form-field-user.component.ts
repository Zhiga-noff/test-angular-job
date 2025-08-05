import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FetchUsersService } from '../fetch-users.service';
import { UserInterface } from '../../interfaces/user-interface';

@Component({
  selector: 'app-form-field-user',
  templateUrl: './form-field-user.component.html',
  styleUrls: ['./form-field-user.component.scss'],
})
export class FormFieldUserComponent {
  @Input() userList: UserInterface[];
  @Output() userListUpdate: EventEmitter<UserInterface[]> = new EventEmitter();
  @Output() searchValue: EventEmitter<string> = new EventEmitter();


  originalNameList: UserInterface[] = [];
  taskValue: string = '';
  activeSetFlag: boolean = true;
  reverseFlag: 'a > b' | 'b > a' | 'random' = 'random';

  constructor(private _fetchUsersService: FetchUsersService) {}

  SubmitTask() {
      this.searchValue.emit(this.taskValue);
  }

  onChangeInput(value: string | null = '') {
    this.taskValue = value;
  }

  closeSearch() {
    this.taskValue = '';
    this.originalNameList = []
    this._fetchUsersService.getUsers().subscribe((users) => {
      this.userListUpdate.emit(users);
    });
  }

  revers() {
    switch (this.reverseFlag) {
      case 'a > b': {
        this.reverseFlag = 'b > a';
        this.userList.reverse();
        this.userListUpdate.emit(this.userList);
        return;
      }
      default: {
        this.reverseFlag = 'a > b';
        this.userList.sort((a: UserInterface, b: UserInterface) => {
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
        this.userListUpdate.emit(this.userList);
      }
    }
  }

  activeUsers() {
    if (!this.originalNameList.length) {
      this.originalNameList= this.userList;
    }

    if (this.activeSetFlag) {
      this.userListUpdate.emit(this.originalNameList.filter((task: UserInterface) => task.active));
      this.activeSetFlag = false
      return
    }
    this.userListUpdate.emit(this.originalNameList.filter((task: UserInterface) => !task.active));
    this.activeSetFlag = true
  }
}
