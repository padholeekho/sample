import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment' 
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = environment.server_url;
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private httpClient: HttpClient) {}  

  public get(path:string, params): Observable<any> {
    return this.httpClient.get(`${this.baseURL}`+path, params).pipe(catchError(this.formatErrors))
  }

  public put(path:string, body):Observable<any>{
    return this.httpClient.put(`${this.baseURL}`+path, JSON.stringify(body), this.options).pipe(catchError(this.formatErrors))
  }

  public post(path:string, body):Observable<any>{
    return this.httpClient.post(`${this.baseURL}`+path, JSON.stringify(body), this.options).pipe(catchError(this.formatErrors))
  }

  public delete(path:string):Observable<any>{
    return this.httpClient.delete(`${this.baseURL}`+path).pipe(catchError(this.formatErrors))
  }

  public formatErrors(error: any): Observable<any> {
    return throwError(error.error);
  }
}
