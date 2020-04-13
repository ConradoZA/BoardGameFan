import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public userService: UserService) { }

  ngOnInit() {
    const token: string = localStorage.getItem('authToken');
    if (token) {
      this.userService.getUserInfo(token)
        .subscribe(
          (res) => this.userService.setUser(res),
          (error) => {
            console.error(error);
            localStorage.removeItem('authToken');
          }
        )
    }
  }
}