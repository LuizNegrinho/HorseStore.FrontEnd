
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bid } from 'src/app/utils/Interfaces/bid-interface';
import { DetailsService } from '../../details.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-insert-bid',
  templateUrl: './insert-bid.component.html',
  styleUrls: ['./insert-bid.component.css']
})
export class InsertBidComponent implements OnInit {
  @Input() maxBid: number | undefined;
  bidForm!: FormGroup;
  whatsAppLink: SafeUrl | null = null;

  constructor(private formBuilder: FormBuilder, private detailsService: DetailsService, private sanitizer: DomSanitizer, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.bidForm = this.formBuilder.group({
      username: ['', Validators.required],
      city: ['', Validators.required],
      value: ['', [Validators.required, Validators.min(this.maxBid ? this.maxBid + 1 : 1)]],
      installments: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    const lotId = param ? parseInt(param) : 0;
    if (this.bidForm.valid) {
      const newBid: Bid = {
        id: 0,
        userId: 0, // Defina o ID do usuário que está fazendo a oferta
        lotId: lotId,
        username: this.bidForm.value.username,
        location: this.bidForm.value.city,
        date: '', // Será definido no serviço DataService
        value: this.bidForm.value.value,
        installments: this.bidForm.value.installments
      };

      this.detailsService.addBid(newBid).subscribe(
        () => {

          console.log('Nova oferta adicionada com sucesso.');
          const link = this.generateWhatsAppLink(this.bidForm.value.username, this.bidForm.value.value, this.bidForm.value.installments);
          this.whatsAppLink = link;
          window.open(this.whatsAppLink.toString(), '_blank');
          this.bidForm.reset();
          window.location.reload();
        },
        (error: any) => {
          console.error('Erro ao adicionar nova oferta.', error);
        }
      );
    }
  }

  generateWhatsAppLink(user: string, value:number, installments: string): SafeUrl {
    const message = `Olá! Acabei de dar um lance de R$ ${value.toFixed(2)} em (${installments}) parcelas. ${user} 🚀`;
    const phoneNumber = '5581989366459';
    const encodedMessage = encodeURIComponent(message);
    const link = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    console.log(`${link}`)
    return link;
  }

  teste(){
    console.log('teste funciona')
    console.log('Nova oferta adicionada com sucesso.');
    const link =  this.generateWhatsAppLink(this.bidForm.value.username, this.bidForm.value.value, this.bidForm.value.installments);
    this.whatsAppLink = link;
    console.log(`${this.whatsAppLink}`)
    console.log
    this.bidForm.reset();
    if (this.whatsAppLink) {
      window.open(this.whatsAppLink.toString(), '_blank');
    }
    //location.reload();
  }
}
