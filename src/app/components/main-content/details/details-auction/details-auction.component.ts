import { ActivatedRoute } from '@angular/router';
import { DataService } from './../../data-service';
import { DetailsService } from './../details.service';
import { Component, OnInit } from '@angular/core';
import { Bid } from 'src/app/utils/Interfaces/bid-interface';


@Component({
  selector: 'app-details-auction',
  templateUrl: './details-auction.component.html',
  styleUrls: ['./details-auction.component.css']
})
export class DetailsAuctionComponent implements OnInit {
  showInsertBidForm = false;
  auction: Bid[] = [];
  maxBid: number = 0;
  private lotId : any;
  constructor(private detailsService : DetailsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.lotId = this.route.snapshot.paramMap.get('id');
    let id = parseInt(this.lotId);
    this.detailsService.getAuctionById(id).subscribe((auction: Bid[]) => { this.auction = auction.slice().reverse(); },
      (error: any) => {
        console.error('Erro ao obter os lances do leilão', error);
      }
    );
  }

  toggleInsertBidForm(): void {
    this.showInsertBidForm = !this.showInsertBidForm;
  }

  getMaxBid(): number {
    this.maxBid = this.auction.reduce((max, bid) => (bid.value > max ? bid.value : max), 0);
    return this.maxBid;
  }
  deleteBid(id: number) {
    return this.detailsService.deleteBid(id).subscribe((data) => {
      window.location.reload();
      return data;
    });
  }
}
