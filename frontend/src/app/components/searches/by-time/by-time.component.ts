import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-by-time',
  templateUrl: './by-time.component.html',
  styleUrls: ['./by-time.component.scss']
})
export class ByTimeComponent implements OnInit {

  constructor(public fb: FormBuilder, public router:Router) { }

  validateForm: FormGroup;
  number = new FormControl('', [Validators.required,]);
  limit = new FormControl('', [Validators.required,]);
  error:boolean=false;

  searchTime() {
    const time = this.validateForm.controls.time.value;
    const condition = this.validateForm.controls.condition.value;
    if (condition === "more") {
      this.router.navigate(['search/minTime', time])
    } else if (condition === "less") {
      this.router.navigate(['search/maxTime', time])
    } else if (condition === "none") {
      this.router.navigate(['search/time', time])
    }else{this.error=true}
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      time: this.number,
      condition: this.limit,
    });
  }

}
