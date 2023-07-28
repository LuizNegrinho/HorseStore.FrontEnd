import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  lotId: any;
  foalData: any;
  constructor(private route: ActivatedRoute, private detailsService: DetailsService) {}

  ngOnInit(): void {
    this.lotId = this.route.snapshot.paramMap.get('id');
    let id = parseInt(this.lotId);
    this.foalData = this.detailsService.getFoal(id);
  }

  getMaxBid(): number {
    return Math.max(...this.foalData.bids);
  }
}
