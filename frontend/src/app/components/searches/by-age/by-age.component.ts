import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-by-age',
  templateUrl: './by-age.component.html',
  styleUrls: ['./by-age.component.scss']
})

export class ByAgeComponent implements OnInit {

  constructor(public router: Router) { }

  searchByAge(event) {
    if (event.key === 'Enter') {
    this.router.navigate(['search/age', event.target.value])
    }
  }

  ngOnInit(): void {
  }

}
