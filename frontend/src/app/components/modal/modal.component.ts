import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: object, public dialogRef: MatDialogRef<ModalComponent>, public userService: UserService, public snackBar: MatSnackBar, ) { }

  ratingValue = this.data['rating'];
  commentValue = this.data['comment'];
  deleteValue;

  ngOnInit(): void { }

  onClickUpdate(): void {
    const token: string = localStorage.getItem('authToken');
    const update = { commentCtrl: this.commentValue, ratingCtrl: this.ratingValue, deleteCtrl: this.deleteValue }
    if (update.deleteCtrl === true) {
      this.userService.deleteGameCollection(this.data['gameId'], token)
        .subscribe(
          (res) => this.snackBar.open("Juego eliminado &#128546", "X", { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom" })
        )
    } else {
      this.userService.updateGameCollection(update.commentCtrl, update.ratingCtrl, this.data['gameId'], token)
        .subscribe(
          (res) => this.snackBar.open("Juego actualizado con éxito", "X", { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom", })
        )
    }
  }
  onClickClose(event){
    event.preventDefault();
    this.dialogRef.close()
  }
}
