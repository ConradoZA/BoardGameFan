import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-big-picture',
  templateUrl: './big-picture.component.html',
  styleUrls: ['./big-picture.component.scss']
})
export class BigPictureComponent implements OnInit {
  public image = this.data['image'];
  constructor(@Inject(MAT_DIALOG_DATA) public data: object, public dialogRef: MatDialogRef<BigPictureComponent>) { }
  public toggle: boolean = true;
  
  ngOnInit(): void {
  }

  switch() {
    this.toggle = !this.toggle;
  }

  close() {
    this.dialogRef.close()
  }

}
