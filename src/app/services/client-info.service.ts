import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, pipe} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientInfoService {
  
  constructor(private readonly http: HttpClient) { }

  public getUserInformation() {
    return this.http.get('https://randomuser.me/api/').pipe(map((val: any) => val.results))
  }

}
