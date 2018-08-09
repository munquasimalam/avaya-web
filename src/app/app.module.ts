import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppointmentService } from './services/AppointmentService';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { DatepickerComponent } from './datepicker/datepicker.component';

@NgModule({
  imports: [ BrowserModule,HttpModule,FormsModule,ReactiveFormsModule,NgbModule.forRoot() ],

  declarations: [ AppComponent,
   ],

  providers: [ AppointmentService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
