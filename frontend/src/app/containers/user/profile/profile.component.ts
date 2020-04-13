import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user: object;
  public data:boolean=true;

  constructor(public userService: UserService, public router: Router) { }
  showData(){this.data=true}
  showCol(){this.data=false}

  ngOnInit(): void {
    const token: string = localStorage.getItem('authToken');
    if (token) {
      this.userService.getUserInfo(token)
        .subscribe(
          (res) => { this.userService.setUser(res); this.user = this.userService.getUser(); },
          (error) => {
            localStorage.removeItem('authToken');
            this.router.navigate(['denied'])
          }
        )
    }
  }

}
