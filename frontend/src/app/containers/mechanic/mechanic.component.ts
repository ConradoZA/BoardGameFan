import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvSearchService } from 'src/app/services/adv-search.service';
import { MatTableDataSource } from '@angular/material/table';
import { GameService } from 'src/app/services/game.service';
import { async } from '@angular/core/testing';


export interface Game{
  year:string;
  image:string;
  name:string;
}

@Component({
  selector: 'app-mechanic',
  templateUrl: './mechanic.component.html',
  styleUrls: ['./mechanic.component.scss']
})
export class MechanicComponent implements OnInit {

  displayedColumns = ['year', 'image', 'name'];
  datosRecibidos=[];
  dataSource;
  datos2=[];
  datos3:Game;
  mecanica:string="";
  gameId;

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  
  constructor(public advSearchService:AdvSearchService, public gameService:GameService, public route: ActivatedRoute, public router:Router) { }
  
  ngOnInit() {
    this.route.params
    .subscribe(param => {this.advSearchService.searchMechanic(param.id)
        .subscribe(
          (res) => {this.datosRecibidos=res['Games'];
          this.mecanica=res['name'];
          this.datosRecibidos.forEach(dato=> {this.datos3={year:dato['year'],image:dato['image'],name:dato['name']};this.datos2.push(this.datos3)})
          this.dataSource = new MatTableDataSource<Game>(this.datos2);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          setTimeout(() => this.applyFilter(""), 0);
          },
          (error) => this.router.navigate(['/denied'])
        )
    });

  }

  applyFilter(filterValue:string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  goToDetail(gameName:string){
  this.gameService.searchGame(gameName)
    .subscribe((res)=> { this.router.navigate(['detail', res[0]['id']]);})
  }
}