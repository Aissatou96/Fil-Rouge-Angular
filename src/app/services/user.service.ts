import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})

export class UserService extends DataService{

  constructor(protected http : HttpClient) {
    super(environment.apiUrl, http)
   }
 
}
