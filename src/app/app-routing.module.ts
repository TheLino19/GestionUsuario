import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path:"usuarios", loadChildren:()=>import("../UI/modules/usuarios/usuarios.module").then(m => m.UsuariosModule)},
  {path:"", loadChildren:()=>import("../UI/modules/main/main.module").then(m => m.MainModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
