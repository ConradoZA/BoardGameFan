import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router:Router, public gameService:GameService) { }

public value:string="";

  goHome(){
    this.router.navigate([''])
  }
  searchGame(event){
    if(event.key==='Enter'){
      this.gameService.searchGame(this.value)
    }
  }
  goToAdvSearch(){
    this.router.navigate(['advSearch'])
  }

  goToProfile(){
    this.router.navigate(['profile'])
  }
  ngOnInit(): void {
  }

}
