import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { BigPictureComponent } from 'src/app/components/big-picture/big-picture.component';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  public gameDetail: Object;
  public exists = [];
  public token: string = localStorage.getItem('authToken');

  constructor(public userService: UserService,
    public gameService: GameService,
    public route: ActivatedRoute,
    public router: Router,
    public dialog: MatDialog, ) { }

  goToArtist(id: string) {
    this.router.navigate(['/artist', id])
  }
  goToAuthor(id: string) {
    this.router.navigate(['/designer', id])
  }
  goToMechanic(id: string) {
    this.router.navigate(['/mechanic', id])
  }
  goToCategory(id: string) {
    this.router.navigate(['/category', id])
  }
  addToCollection() {
    this.userService.newGameInCollection(this.gameDetail['id'])
      .subscribe(res => { this.exists = ["something"] })
  }

  openImage() {
    this.dialog.open(BigPictureComponent, { data: { image: this.gameDetail['image'] } });
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(param => {
        this.gameService.getGameById(param.id)
          .subscribe(
            (res) => {
              this.gameDetail = res;
              this.userService.user$
                .subscribe((res) => {
                  const userCollection = res;
                  this.exists = userCollection['Games'].filter(game => game['id'] === this.gameDetail['id']);
                })
            },
            (error) => console.log(error)
          )
      });
  }
}
