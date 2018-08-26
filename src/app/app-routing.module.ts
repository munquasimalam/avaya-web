
import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent } from './app.component';
import { AvayaAppointmentComponent } from './avaya-appointment/avaya-appointment.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
	{ path: 'patientlist/:mobile', component: AvayaAppointmentComponent }		  
	
];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{ }
