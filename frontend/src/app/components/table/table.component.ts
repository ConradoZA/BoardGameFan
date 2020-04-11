import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvSearchService } from 'src/app/services/adv-search.service';
import { MatTableDataSource } from '@angular/material/table';
import { GameService } from 'src/app/services/game.service';
import { Observable } from 'rxjs';

export interface Game {
  year: string;
  image: string;
  name: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns = ['year', 'image', 'name'];
  datosRecibidos = [];
  dataSource;
  datos2 = [];
  datos3: Game;
  name: string = "";
  gameId;
  path;

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  mapPathToRoute = {
    'artist': 'artists',
    'designer': 'authors',
    'mechanic': 'mechanics',
    'category': 'categories'
  }
  constructor(public advSearchService: AdvSearchService, public gameService: GameService, public route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.path = this.route.url['value'][0]['path'];
    const ruta = this.mapPathToRoute[this.path];
    if (ruta) {
      this.advSearchService.searchByPath(ruta, this.route.snapshot.params['id'])
        .subscribe(
          (res) => {
            this.datosRecibidos = res['Games'];
            this.name = res['name'];
            this.datosRecibidos.forEach(dato => { this.datos3 = { year: dato['year'], image: dato['image'], name: dato['name'] }; this.datos2.push(this.datos3) })
            this.dataSource = new MatTableDataSource<Game>(this.datos2);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            setTimeout(() => this.applyFilter(""), 0);
          },
          (error) => this.router.navigate(['/denied'])
        )
    } else {
      this.router.navigate(['/denied'])
    }
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  goToDetail(gameName: string) {
    this.gameService.searchGame(gameName)
      .subscribe((res) => { this.router.navigate(['detail', res[0]['id']]); })
  }

}
