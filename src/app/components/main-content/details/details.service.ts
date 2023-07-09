import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private foalsData =[
    { id: 1, imageUrl: 'assets/img/lotes/lote1.JPG', name: 'Hayabusa', sufix: 'Estrela Negra', birthDate: new Date(2023, 0, 1), sellPrice: 10000, minPrice: 5000, bid: [3000, 8000, 9000] },
    { id: 2, imageUrl: 'assets/img/lotes/lote2.JPG', name: 'Helix', sufix: 'Estrela Negra', birthDate: new Date(2023, 2, 15), sellPrice: 10000, minPrice: 5000, bid: [] },
    { id: 3, imageUrl: 'assets/img/lotes/lote3.jpg', name: 'Hades', sufix: 'Estrela Negra', birthDate: new Date(2023, 0, 1), sellPrice: 10000, minPrice: 5000, bid: [7000, 8000, 9000] },
    { id: 4, imageUrl: 'assets/img/lotes/lote4.jpg', name: 'Hoshi', sufix: 'Estrela Negra', birthDate: new Date(2023, 2, 15), sellPrice: 10000, minPrice: 5000, bid: [1000, 1300, 1400] },
    { id: 5, imageUrl: 'assets/img/lotes/lote5.jpg', name: 'Hyperion', sufix: 'Estrela Negra', birthDate: new Date(2023, 0, 1), sellPrice: 10000, minPrice: 5000, bid: [12000, 8000, 1000] },
    { id: 6, imageUrl: 'assets/img/lotes/lote6.JPG', name: 'Hera', sufix: 'Estrela Negra', birthDate: new Date(2023, 2, 15), sellPrice: 10000, minPrice: 5000, bid: [1200, 3000, 4000] },
  ]
  constructor() { }

  getFoals(): any[]{
    return this.foalsData;
  }

  getFoal(id: number): any {
    return this.foalsData.find(item => item.id === id);
  }
}
