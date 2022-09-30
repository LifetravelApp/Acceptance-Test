import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payments/pages/payment/payment.component';
import { TravelersComponent } from './travelers/pages/travelers/travelers.component';

const routes: Routes = [
	{ path: 'travelers', component: TravelersComponent },
	{ path: 'payments', component: PaymentComponent },
	{ path: '', redirectTo: 'travelers', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
