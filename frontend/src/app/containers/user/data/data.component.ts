import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { PhotoSelectComponent } from 'src/app/components/photo-select/photo-select.component';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/services/admin.service';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  API_URL = environment.API_URL;
  public user:object={};

  constructor(public userService: UserService, public adminService: AdminService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  public lastName;
  public lastMail;
  public lastGender;
  nameFormControl;
  emailFormControl;
  genderFormControl;

  ngOnInit(): void {
    this.userService.user$
      .subscribe((res) => {
        this.user = res;
        this.lastName = this.user['username'];
        this.lastMail = this.user['email'];
        this.lastGender = this.user['gender'];
        this.nameFormControl = new FormControl({ value: this.user['username'], disabled: true }, [Validators.required,]);
        this.emailFormControl = new FormControl({ value: this.user['email'], disabled: true }, [Validators.required, Validators.email,]);
        this.genderFormControl = new FormControl({ value: this.user['gender'], disabled: true });
      })
  }

  openPhotoModal() {
    this.dialog.open(PhotoSelectComponent, { data: { userID: this.user['id'], image: this.user['image'] } })
      .afterClosed().subscribe(res => {
        if (res === true) {
          this.userService.getUserInfo()
            .subscribe((res) => { this.userService.setUser(res); })
        }
      })
  }
  editName() {
    if (this.nameFormControl.value !== this.lastName) {
      this.userService.updateInfo({ username: `${this.nameFormControl.value}` })
        .subscribe(
          (res) => {
            this.userService.getUserInfo()
              .subscribe((res) => {
                this.userService.setUser(res);
                this.snackBar.open("Nombre actualizado", "(☞ﾟヮﾟ)☞",
                  { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom", });
                location.reload();
              })
          }
        )
    }
    this.nameFormControl.disable()
  }

  editMail() {
    if (this.emailFormControl.value !== this.lastMail) {
      this.userService.updateInfo({ email: `${this.emailFormControl.value}` })
        .subscribe(
          (res) => {
            this.userService.getUserInfo()
              .subscribe((res) => {
                this.user = res;
                this.snackBar.open("E-mail actualizado", "( ﾟヮﾟ)/",
                  { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom", });
              })
          })
    }
    this.emailFormControl.disable()
  }

  editGender() {
    if (this.genderFormControl.value !== this.lastGender) {
      this.userService.updateInfo({ gender: `${this.genderFormControl.value}` })
        .subscribe(
          (res) => {
            this.userService.getUserInfo()
              .subscribe((res) => {
                this.user = res;
                this.snackBar.open("Has cambiado de género", "(⊙_☉)",
                  { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom", });
              })
          }
        )
    }
    this.genderFormControl.disable()
  }

  confirmMail() {
    this.adminService.confirmUser(this.user['email'], this.user['username'])
      .subscribe(
        (res) => {
          this.snackBar.open(res['message'], "ԅ(≖‿≖ԅ)", { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom" });
        }
      )
  }

  changePass() {
    this.dialog.open(ChangePasswordComponent, { data: { userID: this.user['id'], password: this.user['password'] } });
  }

}
