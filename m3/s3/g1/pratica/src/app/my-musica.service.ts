import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISmartphones } from './Model/i-smartphone';


@Injectable({
  providedIn: 'root'
})
export class MySmartphoneService {


  apiUrl:string = "https://dummyjson.com/products";


  constructor(private http:HttpClient){}

  getAllProducts() {
    return this.http.get<ISmartphones[]>('https://dummyjson.com/products');
  }

}
