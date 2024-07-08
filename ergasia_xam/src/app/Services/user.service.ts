import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

// inject the local API URL here
const APIUrlUser = "Http://localhost:8081/api/user";

@Injectable({
  providedIn: 'root'
})
export class UserService extends DataService {

  constructor(http:HttpClient) {
    super (APIUrlUser,http);
   }
}
