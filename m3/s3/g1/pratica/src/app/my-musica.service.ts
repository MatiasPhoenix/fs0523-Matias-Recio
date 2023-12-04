import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IMusica } from './Model/i-musica';

@Injectable({
  providedIn: 'root'
})
export class MyMusicaService {


  apiUrl:string = "https://dummyjson.com/products";

  subject:Subject<string> = new Subject();
  lastPizza$ = this.subject.asObservable();

  constructor(
    private http:HttpClient
  ) { }

  getAll():Observable<IMusica[]>{
    return this.http.get<IMusica[]>(this.apiUrl);
  }
}
