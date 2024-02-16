import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { Bid } from "src/app/utils/Interfaces/bid-interface";
import { User } from "src/app/utils/Interfaces/user-interface";
import { Lot } from "src/app/utils/Interfaces/lot-interface";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class DataService {
  private localApiUrl = '/assets/data.json';
  private apiUrl = environment.backend;

  constructor(private http: HttpClient) {}

  getLots(userId: number = 1) {
    let params = new HttpParams().set('userId', userId);
    var lots = this.http.get<any>(this.apiUrl + "Products/GetIndex", {params:params} ).pipe(map(response => response));
    return lots;
  }

  getBidsByLot(productId: number) {
    let params = new HttpParams().set('productId', productId)
    return this.http.get<any>(this.apiUrl + "Products/GetBids", {params:params}).pipe(map(data => data));
  }




  getUsers() {
    return this.http.get<any>(this.localApiUrl).pipe(map(data => data.users)
    );
  }

  getUserById(id: number){
    return this.http.get<any>(this.localApiUrl).toPromise()
      .then(data => {
        const users: User[] = data.users;
        return users.find(user => user.id === id);
    })
    .catch(error => {
      console.error(`Erro ao obter o usuario com o id: ${id}`, error);
      return null;
    });
  }



  getLotById(id: number){
    return this.http.get<any>(this.localApiUrl).pipe(
      map(data => {const lots: Lot[] = data.lots;
        return lots.find(lot=> lot.id === id);
      }));
  }

  addBid(newBid: Bid): Observable<any> {
    return this.http.get<any>(this.localApiUrl).pipe(
      map(data => {
        const bids = data.bids || []; // Caso o array bids não exista, criamos um array vazio
        newBid.id = this.getNextBidId(bids); // Definimos o ID para a nova oferta
        newBid.date = new Date().toISOString(); // Definimos a data e hora atual para a nova oferta
        bids.push(newBid); // Adicionamos a nova oferta ao array bids
        data.bids = bids; // Atualizamos o objeto data com o novo array bids
        return this.http.post<any>(this.localApiUrl, data);
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
