import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: object,
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    public snackBar: MatSnackBar,
    public fb: FormBuilder,
    public userService: UserService,
    public adminService: AdminService, ) { }

  public oldPassword = this.data['password'];
  validateForm: FormGroup;

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (control.value !== this.passwordFormControl.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  oldPasswordFormControl = new FormControl('', [Validators.required]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,16}$/g),
  ]);
  checkFormControl = new FormControl('', [
    Validators.required,
    this.confirmationValidator,
  ]);

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      oldPass: this.oldPasswordFormControl,
      password: this.passwordFormControl,
      checkPassword: this.checkFormControl
    });
  }

  submitForm(): void {
    this.adminService.hashPassword(this.validateForm.value.oldPass, this.data['userID'])
      .subscribe((res) => {
        const hashOldPass = res['message'];
        if (this.validateForm.valid && hashOldPass === 'Match') {
          this.userService.updateInfo({ password: `${this.passwordFormControl.value}` })
            .subscribe(
              (res) => {
                this.snackBar.open("Password cambiado", "(⌐■_■)", { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom", });
              }
            )
        } else {
          this.snackBar.open("Vuelve a intentarlo otra vez", "(ಠ_ಠ)", { duration: 2000, horizontalPosition: "center", verticalPosition: "bottom", });
        }
        this.dialogRef.close()
      }
      )
  }
}
