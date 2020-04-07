import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(public userService:UserService, public router:Router, public snackBar:MatSnackBar, private fb:FormBuilder) { }

  public hide:boolean = true;
  public validateForm:FormGroup;

    nameFormControl = new FormControl('', [
      Validators.required,
    ]);
    passwordFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(/^().{8,16}$/g),
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
            this.snackBar.open(res['message'],"",{duration:3000,horizontalPosition:"center", verticalPosition:"bottom"});
            setTimeout(() => {
              this.router.navigate([''])
            }, 1000);
        },
        (error)=>{
          this.snackBar.open(error['error']['message'],"",{duration:2000,horizontalPosition:"center", verticalPosition:"bottom",});
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