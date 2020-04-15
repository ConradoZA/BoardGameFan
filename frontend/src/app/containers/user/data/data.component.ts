import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { PhotoSelectComponent } from 'src/app/components/photo-select/photo-select.component';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
@Input() user;
  constructor(public userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openPhotoModal(){
    const token: string = localStorage.getItem('authToken');
    this.dialog.open(PhotoSelectComponent, { data: {userID: this.user['id'], token:token, image:this.user['image']} })
      .afterClosed().subscribe(res => {if(res===true){location.reload()}})
  }

}
