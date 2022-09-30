import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciesComponent } from './agencies/pages/agencies/agencies.component';
import { PaymentComponent } from './payments/pages/payment/payment.component';
import { PlanesComponent } from './planes/pages/planes/planes.component';
import { TravelersComponent } from './travelers/pages/travelers/travelers.component';

export const routes: Routes = [
	{ path: 'travelers', component: TravelersComponent },
	{ path: 'payments', component: PaymentComponent },
	{ path: 'agencies', component: AgenciesComponent },
	{ path: 'planes', component: PlanesComponent },
	{ path: '', redirectTo: 'travelers', pathMatch: 'full' },

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
