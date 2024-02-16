import { Component, OnInit } from '@angular/core';
import { DataService } from './data-service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  lots:any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getLots();
  }

  getLots(){
    this.dataService.getLots().subscribe(lots => {
      console.log(lots)
      this.lots = lots});
    return
  }

}
