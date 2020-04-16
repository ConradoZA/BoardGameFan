import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { PhotoSelectComponent } from 'src/app/components/photo-select/photo-select.component';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  @Input() user;

  constructor(public userService: UserService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  public lastName;
  public lastMail;
  public lastGender;
  nameFormControl;
  emailFormControl;
  genderFormControl;

  ngOnInit(): void {
    this.lastName = this.user['username']
    this.lastMail = this.user['email']
    this.lastGender = this.user['gender']
    this.nameFormControl = new FormControl({ value: this.user['username'], disabled: true }, [Validators.required,]);
    this.emailFormControl = new FormControl({ value: this.user['email'], disabled: true }, [Validators.required, Validators.email,]);
    this.genderFormControl = new FormControl({ value: this.user['gender'], disabled: true }, );
  }

  openPhotoModal() {
    const token: string = localStorage.getItem('authToken');
    this.dialog.open(PhotoSelectComponent, { data: { userID: this.user['id'], token: token, image: this.user['image'] } })
      .afterClosed().subscribe(res => { if (res === true) { location.reload() } })
  }

  editName() {
    const token: string = localStorage.getItem('authToken');
    if (this.nameFormControl.value !== this.lastName) {
      this.userService.updateInfo({ username: `${this.nameFormControl.value}` }, token)
        .subscribe(
          (res) => {
            this.snackBar.open("Nombre actualizado", "(☞ﾟヮﾟ)☞",
              { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom", });
            setTimeout(() => { location.reload() }, 2000);
          }
        )
    }
    this.nameFormControl.disable()
  }

  editMail() {
    const token: string = localStorage.getItem('authToken');
    if (this.emailFormControl.value !== this.lastMail) {
      this.userService.updateInfo({ email: `${this.emailFormControl.value}` }, token)
        .subscribe(
          (res) => {
            this.snackBar.open("E-mail actualizado", "( ﾟヮﾟ)/",
              { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom", });
            setTimeout(() => { location.reload() }, 2000);
          }
        )
    }
    this.emailFormControl.disable()
  }

  editGender() {
    const token: string = localStorage.getItem('authToken');
    if (this.genderFormControl.value !== this.lastGender) {
      this.userService.updateInfo({ gender: `${this.genderFormControl.value}` }, token)
        .subscribe(
          (res) => {
            this.snackBar.open("Has cambiado de género", "(⊙_☉)",
              { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom", });
            setTimeout(() => { location.reload() }, 2000);
          }
        )
    }
    this.genderFormControl.disable()
  }

  confirmMail(){

  }

  changePass(){
    
  }

}
