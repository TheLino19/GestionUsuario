import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';


@NgModule({
  declarations: [
    MenuBarComponent,
    HeaderComponent
  ],
  exports: [
    MenuBarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatToolbar,
    MatIcon
  ]
})
export class SharedModule { }
