import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { AdvSearchService } from 'src/app/services/adv-search.service';
import { GameService } from 'src/app/services/game.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
  styleUrls: ['./by-name.component.scss']
})
export class ByNameComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  selected = "game";
  searchValue: string = "";
  filteredOptions;
  filteredName;
  all;
  names = [];

  constructor(public router: Router, public fb: FormBuilder, public gameService: GameService, public advSearchService: AdvSearchService) {
  }
  getNames() {
    this.names = [];
    if (this.selected === "game") {
      this.gameService.getAllGames()
        .subscribe((res) => { this.all = res; this.all.forEach(game => { this.names.push({ name: game['name'], id: game['id'] }) }); })
    } else if (this.selected === "designer") {
      this.advSearchService.getDesigners()
        .subscribe((res) => { this.all = res; this.all.forEach(author => { this.names.push({ name: author['name'], id: author['id'] }) }); })
    } else if (this.selected === "artist") {
      this.advSearchService.getArtists()
        .subscribe((res) => { this.all = res; this.all.forEach(artist => { this.names.push({ name: artist['name'], id: artist['id'] }) }); })
    } else if (this.selected === "mechanic") {
      this.advSearchService.getMechanics()
        .subscribe((res) => { this.all = res; this.all.forEach(meca => { this.names.push({ name: meca['name'], id: meca['id'] }) }); })
    } else if (this.selected === "category") {
      this.advSearchService.getCategories()
        .subscribe((res) => { this.all = res; this.all.forEach(cate => { this.names.push({ name: cate['name'], id: cate['id'] }) }); })
    }
  }
  getId(){
    this.filteredName= this.names.filter(game=>game['name']==this.secondFormGroup.value['secondCtrl']);
  }
  goToResult() {
    if (this.selected === "game") {
      this.router.navigate(['detail', this.filteredName[0]['id']])
    } else {
      this.router.navigate([`${this.selected}`, this.filteredName[0]['id']])
    }
  }

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });
    this.filteredOptions = this.secondFormGroup.valueChanges
      .pipe(
        map(value => this.filter(value['secondCtrl']))
      );
  }

  private filter(value: string | undefined) {
    const filterValue = value.toLowerCase();
    let gamez = [];
    this.names.forEach(name => gamez.push(name['name']))
    return gamez.filter(option => option.toLowerCase().includes(filterValue));
  }
}
