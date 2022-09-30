import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payments/pages/payment/payment.component';
import { TravelersComponent } from './travelers/pages/travelers/travelers.component';
import {AgenciesComponent} from "./agencies/pages/agencies/agencies.component";
import{PlanesComponent} from "./planes/pages/planes/planes.component";

const routes: Routes = [
	{ path: 'travelers', component: TravelersComponent },
	{ path: 'payments', component: PaymentComponent },
	{ path: '', redirectTo: 'travelers', pathMatch: 'full' },
  {path: 'agencies', component: AgenciesComponent},
  { path: 'planes', component: PlanesComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
