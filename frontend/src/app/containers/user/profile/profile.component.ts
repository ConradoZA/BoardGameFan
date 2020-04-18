import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user: object={};
  public switch: string = "data";

  constructor(public userService: UserService, public router: Router) { }
  showData() { this.switch = "data" }
  showCol() { this.switch = "collection" }
  showAdmin() { this.switch = "admin" }
  showHacks() { this.switch = "hacks" }
  showUsers() { this.switch = "viewUsers" }

  ngOnInit(): void {
    const token: string = localStorage.getItem('authToken');
    if (token) {
      this.userService.getUserInfo()
        .subscribe(
          (res) => {
            this.userService.setUser(res);
            this.user = this.userService.getUser()
          },
          (error) => {
            console.log(error)
            localStorage.removeItem('authToken');
            this.router.navigate(['denied'])
          }
        )
    }
  }

}
