import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurbankComponent } from './city/burbank/burbank.component';
import { DallasComponent } from './city/dallas/dallas.component';
import { SeattleComponent } from './city/seattle/seattle.component';
import { SanJoseComponent } from './city/san-jose/san-jose.component';
import { WashingtonDCComponent } from './city/washington-dc/washington-dc.component';
import { ChicagoComponent } from './city/chicago/chicago.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    BurbankComponent,
    DallasComponent,
    SeattleComponent,
    SanJoseComponent,
    WashingtonDCComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
