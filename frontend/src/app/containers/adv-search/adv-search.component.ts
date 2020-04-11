import { Component, OnInit } from '@angular/core';
import { AdvSearchService } from 'src/app/services/adv-search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adv-search',
  templateUrl: './adv-search.component.html',
  styleUrls: ['./adv-search.component.scss']
})
export class AdvSearchComponent implements OnInit {

  constructor(public advSearchService:AdvSearchService, public router:Router) { }

  ngOnInit(): void {
    this.advSearchService.getMyInfo()
    .subscribe(
      (res)=>{},
      (error)=>{this.router.navigate(['/denied'])}
    )
  }

}
