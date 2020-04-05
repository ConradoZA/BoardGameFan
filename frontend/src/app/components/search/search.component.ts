import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public gamesRes;

  constructor(public route: ActivatedRoute, public gameService:GameService) { }

  goToGame(id){
    
  }


  ngOnInit(): void {
    this.route.params
      .subscribe(param => {this.gameService.searchGame(param.searchValue)
          .subscribe(
            (res) => {this.gamesRes = res;},
            (error) => console.log(error)
          )
      });
  }

}
