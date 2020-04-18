import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public userService:UserService, public router:Router,) { }

public searchValue:string="";

  logout():void{
    localStorage.removeItem('authToken');
    this.userService.setUser({});
    this.router.navigate(['']);
  }

  onClickProfile(){
    event.preventDefault()
    this.router.navigate(['profile'])
  }
  
  onClickHome(){
    event.preventDefault()
    this.router.navigate([''])
  }

  ngOnInit(): void {
  }

}
