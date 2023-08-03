import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { Bid } from "src/app/utils/Interfaces/bid-interface";
import { UserInterface } from "src/app/utils/Interfaces/user-interface";

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

  getUserById(id: number){
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => data.users as UserInterface[]), 
      filter(user => user.some(user => user.id === id)) 
    );
  }

  getBids() {
    return this.http.get<any>(this.apiUrl).pipe(map(data => data.bids));
  }

  getBidsByLot(id: number) {
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => data.bids as Bid[]), 
      filter(bids => bids.some(bid => bid.lotId === id)) 
    );
  }

  getLots() {
    return this.http.get<any>(this.apiUrl).pipe(map(data => data.lots));
  }
}
