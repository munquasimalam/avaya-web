import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';



import { AppComponent } from './app.component';
import { AppointmentService } from './services/AppointmentService';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AvayaAppointmentComponent } from './avaya-appointment/avaya-appointment.component';
import { AppRoutingModule }  from './app-routing.module';

@NgModule({
  imports: [ BrowserModule,HttpModule,FormsModule,ReactiveFormsModule,NgbModule.forRoot(),
    RouterModule,AppRoutingModule ],

  declarations: [ AppComponent, AvayaAppointmentComponent,
   ],

  providers: [ AppointmentService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
