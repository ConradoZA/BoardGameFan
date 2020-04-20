import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-big-picture',
  templateUrl: './big-picture.component.html',
  styleUrls: ['./big-picture.component.scss']
})
export class BigPictureComponent implements OnInit {
  public image = this.data['image'];
  constructor(@Inject(MAT_DIALOG_DATA) public data: object, public dialogRef: MatDialogRef<BigPictureComponent>) { }
  public toggle: boolean = true;
  public evento;

  ngOnInit(): void {
  }

  switch() {
    this.toggle = !this.toggle;
    this.evento.reset()
  }

  onDragEnded(event: CdkDragEnd) {
    this.evento = event.source._dragRef;
  }

  close() {
    this.dialogRef.close()
  }

}
