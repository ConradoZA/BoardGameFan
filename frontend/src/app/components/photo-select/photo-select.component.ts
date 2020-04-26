import { Component, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-photo-select',
  templateUrl: './photo-select.component.html',
  styleUrls: ['./photo-select.component.scss']
})
export class PhotoSelectComponent implements OnInit {
  API_URL = environment.API_URL;
  constructor(
    public userService: UserService,
    public dialogRef: MatDialogRef<PhotoSelectComponent>,
    public snackBar: MatSnackBar, ) { }

  public user: object = {};
  public imageValue = "";
  public lastImage = this.user['image']
  public selectedFile: File = null;
  public loading: boolean = false;

  ngOnInit(): void {
    this.userService.user$.subscribe(res => this.user = res)
  }

  onClickUpdate() {
    if (this.imageValue !== this.lastImage) {
      this.userService.updateInfo({ image: `${this.imageValue}` })
        .subscribe(
          (res) => this.snackBar.open("Imagen actualizada", "٩(^‿^)۶", { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom", })
        )
    }
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const fd = new FormData;
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.userService.uploadImage(fd)
      .subscribe((event) => {
        this.snackBar.open("Imagen actualizada", "٩(^‿^)۶", { duration: 3000, horizontalPosition: "center", verticalPosition: "bottom", });
      })
  }
}
