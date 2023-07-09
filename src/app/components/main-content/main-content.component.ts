import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  photos = [
    { id: 1, imageUrl: 'assets/img/lotes/lote1.JPG', description: 'Hayabusa Estrela Negra' },
    { id: 2, imageUrl: 'assets/img/lotes/lote2.JPG', description: 'Helix Estrela Negra' },
    { id: 3, imageUrl: 'assets/img/lotes/lote3.jpg', description: 'Hades Estrela Negra' },
    { id: 4, imageUrl: 'assets/img/lotes/lote4.jpg', description: 'Hoshi Estrela Negra' },
    { id: 5, imageUrl: 'assets/img/lotes/lote5.jpg', description: 'Hyperion Estrela Negra' },
    { id: 6, imageUrl: 'assets/img/lotes/lote6.JPG', description: 'Hera Estrela Negra' },
  ]

}
