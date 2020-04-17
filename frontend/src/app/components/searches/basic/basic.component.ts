import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { GameService } from 'src/app/services/game.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  searchValue: string = "";
  basicControl = new FormControl();
  options: Array<string> = [];
  filteredOptions: Observable<string[]>;
  gamesName: object;
  ID;

  constructor(public gameService: GameService, public userService: UserService, public router: Router) { }
  ngOnInit() {
    this.gameService.getAllGames().subscribe(
      (res: Array<{}>) => res.forEach(game => { this.options.push(game['name']); }))
    this.filteredOptions = this.basicControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value))
      );
  }

  searchGame(): void {
      this.gameService.searchGame(this.searchValue)
        .subscribe(res => { this.ID = res[0]['id']; this.searchValue = ""; this.router.navigate(['detail', this.ID]); });

    // }
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
