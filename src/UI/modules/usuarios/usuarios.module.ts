import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { MainComponent } from './main/main.component';
import { TableUserComponent } from './table-user/table-user.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    MainComponent,
    TableUserComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    HttpClientModule
  ]
})
export class UsuariosModule { }
