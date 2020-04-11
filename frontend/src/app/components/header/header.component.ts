import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public userService:UserService) { }

public searchValue:string="";

  logout():void{
    localStorage.removeItem('authToken');
    this.userService.setUser({});
  }
  
  ngOnInit(): void {
  }

}
