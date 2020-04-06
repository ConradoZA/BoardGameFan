import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public latest;

  constructor(public gameService: GameService, public router:Router) { }

  goToGame(id:string){
    this.router.navigate(['detail', id])
  }

  ngOnInit(): void {
    this.gameService.searchLatest()
          .subscribe(
            (res) => {this.latest = res;},
            (error) => console.log(error)
          );
  }

}
