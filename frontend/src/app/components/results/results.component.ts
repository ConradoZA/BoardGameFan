import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { AdvSearchService } from 'src/app/services/adv-search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  gamesRes;
  path;

  mapPathToRoute = {
    'search/game': 'search/game',
    'search/year': 'search/year',
    'search/maxPlayers': 'search/players/plus',
    'search/minPlayers': 'search/players/minus',
    'search/players': 'search/players',
    'search/maxTime': 'search/time/plus',
    'search/minTime': 'search/time/minus',
    'search/time': 'search/time',
    'search/age': 'search/age'
  }

  constructor(public advSearchService: AdvSearchService, public route: ActivatedRoute, public gameService: GameService, public router: Router) { }

  goToGame(id: string) {
    this.router.navigate(['detail', id])
  }


  ngOnInit(): void {
    this.path = this.route.url['_value'][0]['path']+"/"+this.route.url['_value'][1]['path'];
    const ruta = this.mapPathToRoute[this.path];
    if (ruta === "search/game") {
      this.gameService.searchGame(this.route.snapshot.params['searchValue'])
        .subscribe(
          (res) => { this.gamesRes = res; },
          (error) => console.log(error)
        )
    } else if (ruta) {
      this.advSearchService.searchByPath(ruta, this.route.snapshot.params['searchValue'])
        .subscribe(
          (res) => { this.gamesRes = res; },
          (error) => this.router.navigate(['/denied'])
        )
    } else {
      this.router.navigate(['/denied'])
    }
  }

}
