import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuBarComponent} from './menu-bar/menu-bar.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
