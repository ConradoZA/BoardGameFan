import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SureComponent } from './sure/sure.component';
import { MatDialog } from '@angular/material/dialog';
import { GameService } from 'src/app/services/game.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public user: object = {};
  deleteValue;
  changeValue;
  userValue;
  deleteGameValue;
  users;

  constructor(public adminService: AdminService,
    public gameSercice: GameService,
    public userService: UserService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit(): void { this.userService.user$.subscribe(res => this.user = res) }

  onClickDeleteUser() {
    this.adminService.getAllUsers()
      .subscribe(
        (res) => {
          this.users = res;
          this.deleteValue = this.deleteValue.toLowerCase();
          this.users = this.users.find(user => user['username'].toLowerCase() === this.deleteValue);
          console.log(this.users)
          if (this.users) {
            if (this.user['role'] === 'admin' && this.users['confirmed']) {
              this.snackBar.open("No puedes borrar a ese usuario", "(-_-)", { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom" })
            }
            this.adminService.deleteUser(this.users['id'])
              .subscribe(
                res => this.snackBar.open("Usuario eliminado", "卌", { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom" })
              )
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
                  const id = res[0]['id'];
                  this.adminService.deleteGame(id)
                    .subscribe(
                      res => this.snackBar.open("Adiós juego...", "( ╥﹏╥) ノシ", { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom" })
                    )
                }
              )
          }

        }
      )
  }

  onClickChangeUser() {
    if (this.changeValue == 'upgrade') {
      this.upgradeUser()
    } else if (this.changeValue == 'downgrade') {
      this.degradeUser()
    }
  }

  upgradeUser() {
    this.adminService.getAllUsers()
      .subscribe(
        (res) => {
          this.users = res;
          this.userValue = this.userValue.toLowerCase();
          this.users = this.users.filter(user => user['username'].toLowerCase() === this.userValue);
          if (this.users[0]['role'] === 'user' && this.users[0]['confirmed']) {
            this.adminService.promoteUser(this.users[0]['id'])
              .subscribe(
                res => this.snackBar.open("Usuario promocionado a Administrador", "[̲̅$̲̅(̲̅ιο̲̅̅)̲̅$̲̅]", { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom" })
              )

          } else { this.snackBar.open("No puedes hacer eso", "( ✜︵✜ )", { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom" }) }
        }
      )
  }

  degradeUser() {
    this.adminService.getAllUsers()
      .subscribe(
        (res) => {
          this.users = res;
          this.userValue = this.userValue.toLowerCase();
          this.users = this.users.filter(user => user['username'].toLowerCase() === this.userValue);
          if (this.users[0]['role'] === 'admin') {
            this.adminService.degradeUser(this.users[0]['id'])
              .subscribe(
                res => this.snackBar.open("Administrador suspendido", "(ノ ゜Д゜)ノ ︵ ┻━┻", { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom" })
              )

          } else { this.snackBar.open("No puedes hacer eso", "( ✜︵✜ )", { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom" }) }
        }
      )
  }
}
