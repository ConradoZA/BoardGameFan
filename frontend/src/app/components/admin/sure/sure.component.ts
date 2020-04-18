import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sure',
  templateUrl: './sure.component.html',
  styleUrls: ['./sure.component.scss']
})
export class SureComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SureComponent>) { }

  ngOnInit(): void {
  }

  onClickClose(event){
    event.preventDefault();
    this.dialogRef.close()
  }

}
