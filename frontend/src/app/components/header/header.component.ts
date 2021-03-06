import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public userService: UserService, public router: Router, ) { }
  API_URL = environment.API_URL;
  public searchValue: string = "";
  public user: object = {};

  logout(): void {
    localStorage.removeItem('authToken');
    this.userService.setUser({});
    this.router.navigate(['']);
  }

  onClickProfile() {
    event.preventDefault()
    this.router.navigate(['profile'])
  }

  onClickHome() {
    event.preventDefault()
    this.router.navigate([''])
  }

  ngOnInit(): void {
    this.userService.user$.subscribe(
      res => this.user = res
    )
  }

}
