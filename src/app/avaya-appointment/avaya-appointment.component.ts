import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/AppointmentService';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router} from '@angular/router';


@Component({
  selector: 'app-avaya-appointment',
  templateUrl: './avaya-appointment.component.html',
  styleUrls: ['./avaya-appointment.component.css']
})
export class AvayaAppointmentComponent implements OnInit {
  patientList: any[] = [];
  mobile:any='0501975805';
  officeList: any[] = [];
  departmentList: any[] = [];
  doctortList: any[] = [];
  timeSlotList: any[] = [];
  noOfSlotList: any[] = [1,2,3,4,5,6,7,8,9,10];
  selectedOfficeId=0;
  selectedDepartmentId=0;
  selectedDoctorId=0;
  selectedDate='';
  selectedTimeSlot='';
  selectedNoOfSlot=0;
  checkedObj: any = {};
   noOfCheckBoxChecked=0;

   public myForm: FormGroup;
   public submitted: boolean;
   public events: any[] = [];
   isShowBookButton:boolean =false;
   dateFormats: string[] = [
    'dd/MM/yyyy',
    'dd/MM/yyyy hh:mm:ss',
    'dd-MM-yyyy',
    'dd-MM-yyyy HH:mm:ss',
    'MM/dd/yyyy',
    'MM/dd/yyyy hh:mm:ss',
    'yyyy/MM/dd',
    'yyyy/MM/dd HH:mm:ss',
    'dd/MM/yy',
    'dd/MM/yy hh:mm:ss',
    ];
 
 
  constructor(private appointmentService: AppointmentService,private _fb: FormBuilder,private router:Router) {
    
   }

  ngOnInit() {
    this.appointmentService.getPatientListByMobileNo(this.mobile)
      .then((results: any[]) => {
        this.patientList = results;
        console.log(results);
       }).catch((error) => console.error(error));

      this.appointmentService.getOfficeList()
      .then((results: any[]) => {
        this.officeList = results;
        console.log(results);
      }).catch((error) => console.error(error));
  }


  officeOnChange(officeId) {
    console.log(officeId);
    this.selectedOfficeId = officeId;
    this.appointmentService.getDepartmentList(officeId)
    .then((results: any[]) => {
      this.departmentList = results;
     
      console.log("results:"+results);
    }).catch((error) => console.error(error));

  }
  departmentOnChange(departmentId) {
    console.log(departmentId);
    this.selectedDepartmentId = departmentId;
    this.appointmentService.getDoctorListByDepartmentId(departmentId)
    .then((results: any[]) => {
      this.doctortList = results;
     
      console.log("results:"+results);
    }).catch((error) => console.error(error));
  }

  doctotOnChange(doctorId) {
    console.log(doctorId);
    this.selectedDoctorId = doctorId;
  }

  
  dateOnChange(date) {
    console.log(date);
    date=this.formateDate(date);
    console.log(date);
    this.selectedDate = date;
    this.appointmentService.getSlotListByDateAndDoctorId(date,this.selectedDoctorId)
    .then((results: any[]) => {
      this.timeSlotList = results;
    }).catch((error) => console.error(error));
  }

  timeSlotOnChange(appointHr) {
    console.log(appointHr);
    this.selectedTimeSlot = appointHr;
    this.isShowBookButton=true;

  }

  SlotOnChange(noOfSlot) {
    console.log(noOfSlot);
    this.selectedNoOfSlot = noOfSlot;
  }
 
  formateDate(date){
    let month:string='';
    let day:string='';
    if(date.month<10){
      month='0'+date.month;
    } else {
      month=date.month; 
    } 
    if(date.day<10){
      day='0'+date.day; 
    } else {
      day=date.day; 
    }
    date=date.year+'-'+month+'-'+day;
    return date;
  }

   updateChecked(patient, event) {
     console.log('event.target.value ' + event.target.value);
     console.log('event.target.checked ' + event.target.checked);
     if(event.target.checked) {
      this.noOfCheckBoxChecked++;
      console.log('add');
      if(this.noOfCheckBoxChecked === 1) {
       // this.checked.push(patient);
        this.checkedObj=patient;
        console.log(this.checkedObj);
        event.target.checked=true;
      } else  {
        event.target.checked=false;
        this.noOfCheckBoxChecked--;
        alert(" More than one check Box are not allowed");
       
      }
    } else {
      console.log('remove');
      this.noOfCheckBoxChecked--;
      console.log(this.noOfCheckBoxChecked) 
    }
    
  }


selectedOfficeName='';
savePatientDetail(){
 
let patientDetail={
'op_number':this.checkedObj.op_number,
'patient_name':this.checkedObj.patient_name,
'sex':this.checkedObj.sex,
'date_of_birth':this.checkedObj.date_of_birth,
'emirates_id':this.checkedObj.emirates_id,
'mobile':this.mobile,
'selectedOfficeId':this.selectedOfficeId,
'selectedDepartmentId':this.selectedDepartmentId,
'selectedDoctorId':this.selectedDoctorId,
'selectedDate':this.selectedDate,
'selectedTimeSlot':this.selectedTimeSlot,
'selectedNoOfSlot':this.selectedNoOfSlot
  };
  console.log(patientDetail);
  this.appointmentService.savePatientDetail(patientDetail)
    .then((isSaved: boolean) => {
      console.log("isSaved:"+isSaved);
      if(isSaved){
        alert("Patient with OP Number:  "+patientDetail.op_number+"  saved successfully.");
      }
    }).catch((error) => console.error(error));
    this.router.navigate(['/']);
 

}
}
