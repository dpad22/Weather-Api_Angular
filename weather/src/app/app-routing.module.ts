import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DallasComponent } from './city/dallas/dallas.component';
import { SeattleComponent } from './city/seattle/seattle.component';
import { BurbankComponent } from './city/burbank/burbank.component';
import { WashingtonDCComponent } from './city/washington-dc/washington-dc.component';
import { SanJoseComponent } from './city/san-jose/san-jose.component';
import { ChicagoComponent } from './city/chicago/chicago.component';


const routes: Routes = [
  {
    path: "dallas",
    component: DallasComponent,

  },
  {
    path: "seattle",
    component: SeattleComponent,

  },
  {
    path: "burbank",
    component: BurbankComponent,

  },
  {
    path: "washington",
    component: WashingtonDCComponent,

  },
  {
    path: "sanJose",
    component: SanJoseComponent,

  },
  {
    path: "chicago",
    component: ChicagoComponent,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
