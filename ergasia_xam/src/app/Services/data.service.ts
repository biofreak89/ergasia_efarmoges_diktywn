import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  
  //inject ApiURL in constructor to Get it
  constructor(@Inject(String) private APIUrl: string,private http: HttpClient) { }

  //Get Method
  getAll(): Observable<any> {
    return this.http.get<any>(this.APIUrl);
  }

  //Get id
  get(id: any): Observable<any> {
    return this.http.get(`${this.APIUrl}/${id}`);
  }

  //Update
  update(data: any): Observable<any> {
    return this.http.put(`${this.APIUrl}`, data);
  }

  //Create
  create(data: any): Observable<any> {
    return this.http.post(this.APIUrl, data);
  }

  //Delete
  delete(id: any): Observable<any> {
    return this.http.delete(`${this.APIUrl}/${id}`);
  }
}
