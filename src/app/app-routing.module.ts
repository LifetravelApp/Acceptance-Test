import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelersComponent } from './travelers/pages/travelers/travelers.component';
import {AgenciesComponent} from "./agencies/pages/agencies/agencies.component";

const routes: Routes = [
	{ path: 'travelers', component: TravelersComponent },
	{ path: '', redirectTo: 'travelers', pathMatch: 'full' },
  {path: 'agencies', component: AgenciesComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
