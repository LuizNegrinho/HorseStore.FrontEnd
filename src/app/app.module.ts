import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { DetailsComponent } from './components/main-content/details/details.component';
import { DetailsService } from './components/main-content/details/details.service';
import { DetailsAuctionComponent } from './components/main-content/details/details-auction/details-auction.component';
import { BrazilianCurrencyPipe } from './utils/brazilian-currency.pipe';
import { HttpClientModule } from '@angular/common/http';
import { InsertBidComponent } from './components/main-content/details/details-auction/insert-bid/insert-bid.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './utils/auth.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    DetailsComponent,
    DetailsAuctionComponent,
    BrazilianCurrencyPipe,
    InsertBidComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    DetailsService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
