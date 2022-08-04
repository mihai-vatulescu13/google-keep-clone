import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SideMenuComponent } from './side-menu.component';

@NgModule({
  declarations: [SideMenuComponent],
  imports: [CommonModule],
  exports: [SideMenuComponent],
})
export class SideMenuModule {}
