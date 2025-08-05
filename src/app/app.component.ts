import { Component, OnInit } from '@angular/core';
import { FetchUsersService } from './fetch-users.service';
import { UserInterface } from '../interfaces/user-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  userList: UserInterface[] | undefined;
  isLoading: boolean = true;

  constructor(private _fetchUsersService: FetchUsersService) {}

  ngOnInit() {
    this.fetchTask();
  }

  fetchTask() {
    this._fetchUsersService.getUsers().subscribe((tasks) => {
      this.userList = tasks;
      this.isLoading = false;
    });
  }

  updateUserList(event: UserInterface[]) {
    this.userList = event;
  }

  searchInUserList(event: string) {
    const arrayTemplate: UserInterface[] = [];
    this.userList.forEach((task) => {
      const title = task.name.toLowerCase();
      if (title.includes(event.toLowerCase())) {
        arrayTemplate.push(task);
      }
    });

    this.userList = arrayTemplate;
  }
}
