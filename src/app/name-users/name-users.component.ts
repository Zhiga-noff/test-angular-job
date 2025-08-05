import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserInterface } from '../../interfaces/user-interface';
import { FetchUsersService } from '../fetch-users.service';

@Component({
  selector: 'app-name-users',
  templateUrl: './name-users.component.html',
  styleUrls: ['./name-users.component.scss'],
})
export class NameUsersComponent {
  @Input('userName') userName: UserInterface | undefined;
  @Input() userList: UserInterface[] | undefined;
  @Output() userListUpdate: EventEmitter<UserInterface[]> = new EventEmitter();


  showEmail: boolean = false;

  constructor(private _fetchTaskService: FetchUsersService) {}


  clickName() {
    this.showEmail = !this.showEmail
  }
}
