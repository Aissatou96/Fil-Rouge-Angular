import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../user/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>('/api/admin/users')
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  create(user): Observable<User> {
    return this.httpClient.post<User>(environment.apiUrl + '/admin/users', JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
   
  find(id): Observable<User> {
    return this.httpClient.get<User>(environment.apiUrl + '/admin/users/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  update(id, user): Observable<User> {
    return this.httpClient.put<User>(environment.apiUrl + '/admin/users/' + id, JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  delete(id){
    return this.httpClient.delete<User>(environment.apiUrl + '/admin/users/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

 
}
