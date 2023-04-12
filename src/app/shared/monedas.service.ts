import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonedasService {

  constructor(private http: HttpClient) { }

getCambio(){
  return this.http.get('https://api.vatcomply.com/rates')
}
getBase(base: any){
  return this.http.get(`https://api.vatcomply.com/rates?base=${base}`)
}
}
