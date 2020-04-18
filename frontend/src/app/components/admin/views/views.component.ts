import { Component, OnInit } from '@angular/core';
import {Sort} from '@angular/material/sort';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit {

  sortedUsers;
  users;

  constructor(public adminService:AdminService, ) { }

  sortUsers(sort: Sort) {
    const data = this.users.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedUsers = data;
      return;
    }

    this.sortedUsers = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'username': return this.compare(a.username, b.username, isAsc);
        case 'confirmed': return this.compare(a.confirmed, b.confirmed, isAsc);
        case 'role': return this.compare(a.role, b.role, isAsc);
        default: return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  ngOnInit(): void {
    this.adminService.getAllUsers()
    .subscribe(
      (res)=>{this.users=res;
        this.sortedUsers=this.users.slice();
      }
    )

  }

}
