import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { AdvSearchService } from 'src/app/services/adv-search.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
  styleUrls: ['./by-name.component.scss']
})
export class ByNameComponent implements OnInit {
  options: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  selected="game";
  all;
  names;

  constructor(public fb: FormBuilder, public gameService: GameService, public advSearchService: AdvSearchService) {
  }
  getNames(){
if(this.selected==="game"){
this.all.forEach(game => {this.names.push(game['name']); console.log(this.names)})
}else if(this.selected==="designer"){

}else if(this.selected==="artist"){

}else if(this.selected==="mechanic"){

}else if(this.selected==="category"){

}
  }
  goToResult(){

  }

  ngOnInit() {
    this.gameService.getAllGames()
    .subscribe((res)=>{this.all=res});
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
