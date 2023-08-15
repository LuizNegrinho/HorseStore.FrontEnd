import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from './details.service';
import { Lot } from 'src/app/utils/Interfaces/lot-interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  lotId: any;
  foalData: Lot = {
    id: 0,
    imageUrl: '',
    name: '',
    sufix: '',
    birthDate: '',
    sellPrice: 0,
    minPrice: 0,
    bids: [],
    mother: '',
    father: '',
    maxBid: '',
    maxBidUserId: 0,
  }

  constructor(private route: ActivatedRoute, private detailsService: DetailsService) {}

  ngOnInit(): void {
    this.lotId = this.route.snapshot.paramMap.get('id');
    let id = parseInt(this.lotId);
    this.detailsService.getFoal(id).subscribe((foal: Lot) => {this.foalData = foal});
  }

  getMaxBid(): number {
    return this.foalData?.bids ? Math.max(...this.foalData.bids) : 0;
  }
}
