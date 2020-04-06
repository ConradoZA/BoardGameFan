import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

  export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }
  
  export class RegisterComponent implements OnInit {

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
          const user =this.validateForm.value;
          this.userService.register(user)
          .subscribe(
            (res) =>{

              // this.notification.success(
              //   'Registro realizado con éxito',
              //   res['message']
              //   );
                setTimeout(() => {
                  this.router.navigate([''])
                }, 2500);
            },
            (error)=>{
              // this.notification.error(
              //   'Problema al registrar usuario',
              //   error['error']['message']
              //   );
            }
          )
          this.validateForm.reset();
        }
  
    constructor(public userService:UserService, public router:Router) { }
  
    ngOnInit(): void {
        this.validateForm= new FormGroup({
          username:this.nameFormControl,
          email:this.emailFormControl,
          password:this.passwordFormControl
        })
    }
    matcher = new MyErrorStateMatcher();
  }