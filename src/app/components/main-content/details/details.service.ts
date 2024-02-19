import { Injectable } from '@angular/core';
import { DataService } from '../data-service';
import { Bid } from 'src/app/utils/Interfaces/bid-interface';
import { Lot } from 'src/app/utils/Interfaces/lot-interface';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private lots = [];
  private foalsData =[
    { id: 1, imageUrl: 'assets/img/lotes/lote1.JPG', name: 'Hayabusa', sufix: 'Estrela Negra', birthDate: new Date(2023, 0, 1), sellPrice: 10000, minPrice: 5000, bids: [3000, 8000, 9000] },
    { id: 2, imageUrl: 'assets/img/lotes/lote2.JPG', name: 'Helix', sufix: 'Estrela Negra', birthDate: new Date(2023, 2, 15), sellPrice: 10000, minPrice: 5000, bids: [] },
    { id: 3, imageUrl: 'assets/img/lotes/lote3.jpg', name: 'Hades', sufix: 'Estrela Negra', birthDate: new Date(2023, 0, 1), sellPrice: 10000, minPrice: 5000, bids: [7000, 8000, 9000] },
    { id: 4, imageUrl: 'assets/img/lotes/lote4.jpg', name: 'Hoshi', sufix: 'Estrela Negra', birthDate: new Date(2023, 2, 15), sellPrice: 10000, minPrice: 5000, bids: [1000, 1300, 1400] },
    { id: 5, imageUrl: 'assets/img/lotes/lote5.jpg', name: 'Hyperion', sufix: 'Estrela Negra', birthDate: new Date(2023, 0, 1), sellPrice: 10000, minPrice: 5000, bids: [12000, 8000, 1000] },
    { id: 6, imageUrl: 'assets/img/lotes/lote6.JPG', name: 'Hera', sufix: 'Estrela Negra', birthDate: new Date(2023, 2, 15), sellPrice: 10000, minPrice: 5000, bids: [1200, 3000, 4000] },
  ]
  private externalAuction = [];


  constructor(private dataService: DataService) { }

  ngOnInit(){
    this.dataService.getLots().subscribe(lots => this.lots = lots);
  }

  getFoals(): any[]{
    return this.foalsData;
  }

  getFoal(id: number): any{
    return this.dataService.getLotById(id);
  }

  getAuctionById(id: number): any {
    return this.dataService.getBidsByLot(id);

  }

  getRandomBid(): number {
    return Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000;
  }

  addBid(newBid: Bid): any{
    return this.dataService.addBid(newBid);
  }

  deleteBid(id: number) {
    return this.dataService.deleteBid(id);
  }
}
