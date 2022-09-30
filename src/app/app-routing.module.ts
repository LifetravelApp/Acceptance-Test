import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TravelersComponent } from './travelers/pages/travelers/travelers.component';

export const routes = [
	{ path: 'travelers', component: TravelersComponent },
	{ path: '', redirectTo: 'travelers', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
