import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private foalsData =[
    { id: 1, imageUrl: 'assets/img/lotes/lote1.JPG', name: 'Hayabusa', sufix: 'Estrela Negra', birthDate: new Date(2023, 0, 1), sellPrice: 10000, minPrice: 5000, bids: [3000, 8000, 9000] },
    { id: 2, imageUrl: 'assets/img/lotes/lote2.JPG', name: 'Helix', sufix: 'Estrela Negra', birthDate: new Date(2023, 2, 15), sellPrice: 10000, minPrice: 5000, bids: [] },
    { id: 3, imageUrl: 'assets/img/lotes/lote3.jpg', name: 'Hades', sufix: 'Estrela Negra', birthDate: new Date(2023, 0, 1), sellPrice: 10000, minPrice: 5000, bids: [7000, 8000, 9000] },
    { id: 4, imageUrl: 'assets/img/lotes/lote4.jpg', name: 'Hoshi', sufix: 'Estrela Negra', birthDate: new Date(2023, 2, 15), sellPrice: 10000, minPrice: 5000, bids: [1000, 1300, 1400] },
    { id: 5, imageUrl: 'assets/img/lotes/lote5.jpg', name: 'Hyperion', sufix: 'Estrela Negra', birthDate: new Date(2023, 0, 1), sellPrice: 10000, minPrice: 5000, bids: [12000, 8000, 1000] },
    { id: 6, imageUrl: 'assets/img/lotes/lote6.JPG', name: 'Hera', sufix: 'Estrela Negra', birthDate: new Date(2023, 2, 15), sellPrice: 10000, minPrice: 5000, bids: [1200, 3000, 4000] },
  ]

  private auction = [
    { id: 1, username: 'João da Silva', location: 'São Paulo', date: '2023-07-09', bid: this.getRandomBid() },
    { id: 2, username: 'Maria Santos', location: 'Rio de Janeiro', date: '2023-07-10', bid: this.getRandomBid() },
    { id: 3, username: 'Pedro Oliveira', location: 'Belo Horizonte', date: '2023-07-11', bid: this.getRandomBid() },
    { id: 4, username: 'Ana Costa', location: 'Salvador', date: '2023-07-12', bid: this.getRandomBid() },
    { id: 5, username: 'Rafael Souza', location: 'Curitiba', date: '2023-07-13', bid: this.getRandomBid() }

  ]
  constructor() { }

  getFoals(): any[]{
    return this.foalsData;
  }

  getFoal(id: number): any {
    return this.foalsData.find(item => item.id === id);
  }

  getAuction(): any[]{
    return this.auction;
  }

  getRandomBid(): number {
    return Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000;
  }
}
