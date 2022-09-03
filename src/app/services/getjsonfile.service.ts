import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetjsonfileService {
  constructor( private http:HttpClient ) {}

  public pageData(fileName:any): Observable<any> {
    let _jsonURL = '/assets/data/pages/'+fileName+'.json';
  //  console.log(this.http.get(_jsonURL))
    return this.http.get(_jsonURL);
  }

  public blockData(fileName:any): Observable<any> {
    let _jsonURL = '/assets/data/pages/'+fileName+'.json';
  //  console.log(this.http.get(_jsonURL))
    return this.http.get(_jsonURL);
  }

}
