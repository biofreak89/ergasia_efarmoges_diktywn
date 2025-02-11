import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

// inject the local API URL here
const APIUrlRole = "Http://localhost:8081/api/role";

@Injectable({
  providedIn: 'root'
})
export class RoleService extends DataService{

  constructor(http:HttpClient) {
    super(APIUrlRole,http);
   }
}
