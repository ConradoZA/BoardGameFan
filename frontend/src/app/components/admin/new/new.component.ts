import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  public user:object={};
  public newValue;
  constructor(public adminService: AdminService, public userService: UserService, public snackBar: MatSnackBar, public router: Router) { }

  ngOnInit(): void {
    this.userService.user$.subscribe(res => this.user = res);
    if (this.user['role'] !== 'god') {
      localStorage.removeItem('authToken');
      this.snackBar.open("No lo intentes de nuevo", "┌П┐(ಠ_ಠ)", { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom" })
      setTimeout(() => {
        this.router.navigate(['denied'])
      }, 2000);
    }
  }
  onClickCreate() {
    this.adminService.createNewGame(this.newValue)
      .subscribe(
        (res) => this.snackBar.open("Ya sé Kung-Fu...", "☜(⌒▽⌒)☞", { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom", }),
        (error)=> this.snackBar.open("¡Corred, insensatos!", "༼ つ ◕_◕ ༽つ", { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom", }),
      )
  }
}
