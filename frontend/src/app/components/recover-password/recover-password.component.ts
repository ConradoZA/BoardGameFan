import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

  constructor(public fb: FormBuilder, public router: Router, public snackBar: MatSnackBar, public adminService: AdminService, public route: ActivatedRoute, ) { }

  validateForm: FormGroup;
  token;

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (control.value !== this.passwordFormControl.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,16}$/g),
  ]);
  checkFormControl = new FormControl('', [
    Validators.required,
    this.confirmationValidator,
  ]);

  ngOnInit(): void {
    this.token = this.route.snapshot.params.token;
    this.validateForm = this.fb.group({
      password: this.passwordFormControl,
      checkPassword: this.checkFormControl
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.adminService.newPassword(this.token, this.passwordFormControl.value)
        .subscribe(
          (res) => {
            this.validateForm.reset();
            this.snackBar.open("Contraseña cambiada", "(ʘ‿ʘ)╯", { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom", });
            setTimeout(() => {
              this.router.navigate(['/login'])
            }, 1000);
          },
          (error) => {
            this.snackBar.open(error['error']['message'], "(ಠ_ಠ)", { duration: 2000, horizontalPosition: "center", verticalPosition: "bottom", });
          }
        )
    }
  }

}
