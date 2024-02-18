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

  //migrados
  getLots(userId: number = 1) {
    let params = new HttpParams().set('userId', userId);
    var lots = this.http.get<any>(this.apiUrl + "Products/GetIndex", {params:params} ).pipe(map(response => response));
    return lots;
  }


  getLotById(productId: number){
    let params = new HttpParams().set('productId', productId)
    return this.http.get<Lot>(this.apiUrl + "Products/GetLot", {params:params}).pipe(map(data => data));
  }

  getBidsByLot(productId: number) {
    let params = new HttpParams().set('productId', productId)
    return this.http.get<any>(this.apiUrl + "Products/GetBids", {params:params}).pipe(map(data => data));
  }
  addBid(newBid: Bid) {
    return this.http.post(this.apiUrl + "Products/InsertBid", newBid).pipe(map(data => data));
  }

  //não migrados
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



  private getNextBidId(bids: Bid[]): number {
    if (bids && bids.length > 0) {
      const maxId = Math.max(...bids.map(bid => bid.id), 0);
      return maxId + 1;
    }
    return 1;
  }

}
