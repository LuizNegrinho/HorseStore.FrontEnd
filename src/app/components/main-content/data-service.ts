import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {
  private apiUrl = '/assets/data.json';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>(this.apiUrl).pipe(map(data => data.users)
      );
  }

  getBids() {
    return this.http.get<any>(this.apiUrl).pipe(map(data => data.bids));
  }

  getLots() {
    return this.http.get<any>(this.apiUrl).pipe(map(data => data.lots));
  }
}
