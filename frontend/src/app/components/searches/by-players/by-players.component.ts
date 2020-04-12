import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-by-players',
  templateUrl: './by-players.component.html',
  styleUrls: ['./by-players.component.scss']
})
export class ByPlayersComponent implements OnInit {

  constructor(public fb: FormBuilder, public router:Router) { }
  validateForm: FormGroup;
  number = new FormControl('', [Validators.required,]);
  limit = new FormControl('', [Validators.required,]);
  error:boolean=false;

  searchPlayers() {
    const players = this.validateForm.controls.players.value;
    const condition = this.validateForm.controls.condition.value;
    if (condition === "more") {
      this.router.navigate(['search/minPlayers', players])
    } else if (condition === "less") {
      this.router.navigate(['search/maxPlayers', players])
    } else if (condition === "none") {
      this.router.navigate(['search/players', players])
    }else{this.error=true}
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      players: this.number,
      condition: this.limit,
    });
  }

}
