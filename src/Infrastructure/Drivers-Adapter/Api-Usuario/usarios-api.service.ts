import { Injectable } from '@angular/core';
import {GetUserUseCases} from '../../../Domains/usecase/GetUserUseCases';
import {Observable} from 'rxjs';
import {Usuario} from '../../../Domains/Models/Welcome';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsariosApiService extends GetUserUseCases {
  private _url = 'https://jsonplaceholder.typicode.com/users/';
  constructor(private http: HttpClient) {super (); }

  getByID(id: String): Observable<Usuario> {
    return this.http.get<Usuario>(this._url+id);
  }

  getAll(): Observable<Usuario> {
    return this.http.get<Usuario>(this._url);
  }
}
