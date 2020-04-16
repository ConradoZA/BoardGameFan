import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    
  constructor(public userService:UserService, public router:Router, private snackBar:MatSnackBar, private fb:FormBuilder) { }

    validateForm:FormGroup;

    confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
      if (control.value !== this.passwordFormControl.value) {
        return { confirm: true, error: true };
      }
      return {};
    };
  
      nameFormControl = new FormControl('', [
        Validators.required,
      ])
      emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
      ]);
      passwordFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,16}$/g),
      ]);
      checkFormControl = new FormControl('', [
        Validators.required,
        this.confirmationValidator,
      ]);

      submitForm(): void {
        if(this.validateForm.valid){
          const user =this.validateForm.value;
          this.userService.register(user)
          .subscribe(
            (res) =>{
              this.validateForm.reset();
              this.snackBar.open(res['message'],"(ʘ‿ʘ)╯",{duration:3000,horizontalPosition:"center", verticalPosition:"bottom",});
              setTimeout(() => {
              this.router.navigate(['/login'])
              }, 1000);
            },
            (error)=>{
              this.snackBar.open(error['error']['message'],"(ಠ_ಠ)",{duration:2000,horizontalPosition:"center", verticalPosition:"bottom",});
            }
          )
        }
      }

  
    ngOnInit(): void {
      this.validateForm = this.fb.group({
        email: this.emailFormControl,
        password:this.passwordFormControl,
        checkPassword:this.checkFormControl,
        username:this.nameFormControl,
      });
    }
  }