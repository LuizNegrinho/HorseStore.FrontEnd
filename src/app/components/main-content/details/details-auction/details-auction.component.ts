import { DetailsService } from './../details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-auction',
  templateUrl: './details-auction.component.html',
  styleUrls: ['./details-auction.component.css']
})
export class DetailsAuctionComponent implements OnInit {
  auction: any;
  constructor(private detailsService : DetailsService) { }

  ngOnInit(): void {
    this.auction = this.detailsService.getAuction();
  }

}
