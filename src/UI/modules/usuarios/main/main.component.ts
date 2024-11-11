import { Component } from '@angular/core';
import {UsariosApiService} from '../../../../Infrastructure/Drivers-Adapter/Api-Usuario/usarios-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(private _userService: UsariosApiService) {
  }
  importar() {
    this._userService.getAll().subscribe(res => console.log(res));
  }
}
