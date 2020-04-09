import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvSearchService } from 'src/app/services/adv-search.service';
import { MatTableDataSource } from '@angular/material/table';


export interface Game{
  year:string;
  image:string;
  name:string;
}

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.scss']
})
export class DesignerComponent implements OnInit {

  displayedColumns = ['year', 'image', 'name'];
  datosRecibidos=[];
  dataSource;

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  
  constructor(public advSearchService:AdvSearchService, public route: ActivatedRoute, public router:Router) { }
  ngOnInit() {
    this.route.params
    .subscribe(param => {this.advSearchService.searchAuthor(param.id)
        .subscribe(
          (res) => {this.datosRecibidos=res['Games'];
          this.dataSource = new MatTableDataSource(this.datosRecibidos);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          },
          (error) => this.router.navigate(['/denied'])
        )
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

