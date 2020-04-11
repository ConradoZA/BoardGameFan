import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { GameService } from 'src/app/services/game.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-by-year',
  templateUrl: './by-year.component.html',
  styleUrls: ['./by-year.component.scss']
})
export class ByYearComponent implements OnInit {
  searchValue: string = "";
  control = new FormControl();
  options: Array<string> = [];
  filteredOptions: Observable<string[]>;

  constructor(public gameService: GameService, public userService: UserService, public router: Router) { }
  ngOnInit() {
    this.gameService.getAllGames().subscribe(
      (res: Array<{}>) => res.forEach(game => { this.options.push(game['year']); }))
    this.filteredOptions = this.control.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value))
      );
  }

  searchYear(event): void {

    if (event.key === 'Enter') {
      this.router.navigate(['search/year', this.searchValue])
    }
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((x, i, a) => a.indexOf(x) == i).filter(option => option.toLowerCase().includes(filterValue));
  }
}