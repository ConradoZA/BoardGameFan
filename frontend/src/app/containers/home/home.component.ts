import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public latest;

  constructor(public gameService: GameService) { }

  goToGame(id){

  }

  ngOnInit(): void {
    this.gameService.searchLatest()
          .subscribe(
            (res) => {this.latest = res;},
            (error) => console.log(error)
          );
  }

}
