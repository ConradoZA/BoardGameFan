import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  public gameDetail

  constructor(public gameService:GameService, public route: ActivatedRoute, public router:Router) { }

  goToArtist(id){

  }
  goToAuthor(id:string){
    this.router.navigate(['/designer', id])
  }
  goToMechanic(id){
    
  }
  goToCategory(id){
    
  }

  ngOnInit(): void {
    this.route.params
    .subscribe(param => {this.gameService.getGameById(param.id)
        .subscribe(
          (res) => {this.gameDetail = res;},
          (error) => console.log(error)
        )
    });
  }

}
