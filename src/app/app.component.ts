import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The good Angular programmer';

  userService: UserService = new UserService();
  userList: User[] = this.userService.list;

  currentUser: User = new User();

  constructor() {}

  onSelectUser( user: User ): void {
    if (this.currentUser.id !== user.id )  {
      this.currentUser = user;
    } else {
      this.currentUser = new User();
    }
  }
  onUpdateUser(user: User): void  {
    this.userService.updateUser( user );
  }
  onDeleteUser(user: User): void  {
    this.userService.removeUser( user );
    this.currentUser = new User();
  }

}
