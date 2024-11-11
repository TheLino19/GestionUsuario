import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Usuario} from '../Models/Welcome';


@Injectable({
  providedIn: 'root'
})

export abstract class GetUserUseCases{
  abstract getByID(id: String): Observable<Usuario>;
  abstract getAll(): Observable<Usuario>;
}
