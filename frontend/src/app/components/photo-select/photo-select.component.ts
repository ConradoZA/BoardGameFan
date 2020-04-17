import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-photo-select',
  templateUrl: './photo-select.component.html',
  styleUrls: ['./photo-select.component.scss']
})
export class PhotoSelectComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: object, public userService: UserService, public dialogRef: MatDialogRef<PhotoSelectComponent>, public snackBar: MatSnackBar, ) { }

  public imageValue = "";
  public lastImage = this.data['image']

  ngOnInit(): void {
  }

  onClickUpdate() {
    if (this.imageValue !== this.lastImage) {
      this.userService.updateInfo({ image: `${this.imageValue}` })
        .subscribe(
          (res) => this.snackBar.open("Imagen actualizada", "٩(^‿^)۶", { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom", })
        )
    }
    this.dialogRef.close();
    location.reload();
  }
}
