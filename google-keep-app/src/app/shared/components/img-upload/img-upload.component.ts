import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-img-upload',
  templateUrl: './img-upload.component.html',
  styleUrls: ['./img-upload.component.scss'],
})
export class ImgUploadComponent implements OnInit {
  public isImageSaved: boolean = false;
  public cardImageBase64: string = '';

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    // get latest data changes from modal observable:
    this.modalService.getModal().subscribe((data) => {
      this.modalService.noteModalData = data;
    });
  }

  CreateBase64String(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const image = new Image();
        image.src = event.target.result;

        image.onload = (rs) => {
          const imgBase64Path = event.target.result;
          this.cardImageBase64 = imgBase64Path;
          this.isImageSaved = true;

          // show file ASCII buffer:
          // console.log(imgBase64Path);

          this.modalService.setModal({
            ...this.modalService.noteModalData,
            uploadedImage: imgBase64Path,
          });
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
}
