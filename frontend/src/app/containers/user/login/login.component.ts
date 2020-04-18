import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(public userService: UserService, public adminService: AdminService, public router: Router, public snackBar: MatSnackBar, private fb: FormBuilder) { }

  public hide: boolean = true;
  public validateForm: FormGroup;
  public warning: boolean = false;

  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  submitForm(): void {
    if (this.validateForm.valid) {
      const user = this.validateForm.value;
      this.userService.login(user)
        .subscribe(
          (res) => {
            localStorage.setItem('authToken', res['token']);
            this.userService.setUser(res['user']);
            this.validateForm.reset();
            this.snackBar.open(res['message'], "(ʘ‿ʘ)╯", { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom" });
            setTimeout(() => {
              this.router.navigate([''])
            }, 1000);
          },
          (error) => {
            this.snackBar.open(error['error']['message'], "(ಠ_ಠ)", { duration: 2000, horizontalPosition: "center", verticalPosition: "bottom", });
          }
        )
    }
  }

  onClickForgot() {
    if (!this.nameFormControl.valid) { this.warning = true }
    else {
      this.warning = false;
      const username = this.nameFormControl.value;
      this.adminService.forgotPassword(username)
        .subscribe((res) => {
          this.snackBar.open("Te hemos mandado un mail", "⊹╰(⌣ʟ⌣)╯⊹", { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom" });
          this.router.navigate(['']);
        }
        )
    }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: this.nameFormControl,
      password: this.passwordFormControl,
    });
  }

}