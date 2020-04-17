import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SureComponent } from '../sure/sure.component';
import { MatDialog } from '@angular/material/dialog';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @Input() user;
  deleteValue;
  deleteGameValue;
  users;

  constructor(public adminService: AdminService, public gameSercice: GameService, public snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void { }

  onClickDeleteUser() {
    this.adminService.getAllUsers()
      .subscribe(
        (res) => {
          this.users = res; this.deleteValue = this.deleteValue.toLowerCase();
          this.users = this.users.filter(user => user['username'].toLowerCase() === this.deleteValue);
          if (this.users) {
            if (this.user['role'] === 'admin' && this.users[0]['confirmed']) {
              this.snackBar.open("No puedes borrar a ese usuario", "(-_-)", { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom" })
            }
            this.adminService.deleteUser(this.users[0]['id'])
          } else { this.snackBar.open("No existe ese usuario", "(-_-)", { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom" }) }
        }
      )
  }
  onClickDeleteGame() {
    this.dialog.open(SureComponent)
      .afterClosed().subscribe(
        (res) => {
          if (res === true) {
            this.gameSercice.searchGame(this.deleteGameValue)
              .subscribe(
                (res) => {
                  this.adminService.deleteGame(res[0]['id'])
                }
              )
          }

        }
      )
  }
}
