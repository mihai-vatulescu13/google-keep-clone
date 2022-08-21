import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImgUploadModule } from '../img-upload/img-upload.module';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, FontAwesomeModule, ImgUploadModule],
  exports: [ModalComponent],
})
export class ModalModule {}
