import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { GameService } from 'src/app/services/game.service';
import { UserService } from 'src/app/services/user.service';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

export interface Game {
  edit: boolean;
  image: string;
  name: string;
  comment: string;
  rating: number;
  gameId: string;
}

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  displayedColumns = ['edit', 'image', 'name', 'comment', 'rating'];
  @Input() user = {};
  collection;
  datos2 = [];
  datos3: Game;
  game;

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(public userService: UserService, public router: Router, public gameService: GameService, public dialog: MatDialog, ) { }

  ngOnInit(): void {
    this.user['Games'].forEach(game => { this.datos3 = { edit: false, image: game['image'], name: game['name'], comment: game['UserGame']['comment'], rating: game['UserGame']['rating'], gameId: game['id'] }; this.datos2.push(this.datos3) });
    this.collection = new MatTableDataSource<Game>(this.datos2);
    this.collection.sort = this.sort;
    setTimeout(() => this.collection.paginator = this.paginator, 0);
  }

  goToDetail(gameName: string) {
    this.gameService.searchGame(gameName)
      .subscribe((res) => { this.router.navigate(['detail', res[0]['id']]); })
  }

  openModal(id) {
    this.game = this.datos2.filter(game => game['gameId'] === id);
    this.dialog.open(ModalComponent, { data: { comment: this.game[0]['comment'], gameId: this.game[0]['gameId'], name: this.game[0]['name'], rating: this.game[0]['rating'] } })
      .afterClosed().subscribe(res => {if(res===true){location.reload()}})
  }
}
