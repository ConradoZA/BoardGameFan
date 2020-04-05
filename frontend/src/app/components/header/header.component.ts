import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router:Router, public userService:UserService) { }

public searchValue:string="";

  searchGame(event):void{
    if(event.key==='Enter'){
      this.router.navigate(['search', this.searchValue])
    }
  }
  logout():void{
    localStorage.removeItem('authToken');
    this.userService.setUser({});
  }
  
  ngOnInit(): void {
  }

}
