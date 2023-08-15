import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { Bid } from "src/app/utils/Interfaces/bid-interface";
import { User } from "src/app/utils/Interfaces/user-interface";
import { Lot } from "src/app/utils/Interfaces/lot-interface";
import { Observable } from "rxjs";

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
    return this.http.get<any>(this.apiUrl).toPromise()
      .then(data => {
        const users: User[] = data.users;
        return users.find(user => user.id === id);              
    })
    .catch(error => {
      console.error(`Erro ao obter o usuario com o id: ${id}`, error);
      return null;
    });
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

  getLotById(id: number){
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => {const lots: Lot[] = data.lots;
        return lots.find(lot=> lot.id === id);      
      }));
  }

  addBid(newBid: Bid): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => {
        const bids = data.bids || []; // Caso o array bids não exista, criamos um array vazio
        newBid.id = this.getNextBidId(bids); // Definimos o ID para a nova oferta
        newBid.date = new Date().toISOString(); // Definimos a data e hora atual para a nova oferta
        bids.push(newBid); // Adicionamos a nova oferta ao array bids
        data.bids = bids; // Atualizamos o objeto data com o novo array bids
        return this.http.post<any>(this.apiUrl, data);
      })
    );
  }
  
  private getNextBidId(bids: Bid[]): number {
    if (bids && bids.length > 0) {
      const maxId = Math.max(...bids.map(bid => bid.id), 0);
      return maxId + 1;
    }
    return 1;
  }

}
