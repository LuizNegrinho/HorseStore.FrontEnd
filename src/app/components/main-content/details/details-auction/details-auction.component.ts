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
  auction: Bid[] = [];
  private lotId : any;  
  constructor(private detailsService : DetailsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.lotId = this.route.snapshot.paramMap.get('id');
    let id = parseInt(this.lotId);
    //this.auction = this.detailsService.getAuction();
    this.detailsService.getAuctionById(id).subscribe(
      (auction: Bid[]) => {
        this.auction = auction;
      },
      (error: any) => {
        console.error('Erro ao obter os lances do leilão', error);
      }
    );
    } 
  
}
