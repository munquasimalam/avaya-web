import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
const API_URL = 'http://localhost:3000/v1';

@Injectable()
export class AppointmentService {
  public headers: any;
  private errorMsg: string = "Network Error: Please check your network connection";

      constructor(private http: Http) {
  }
 
getPatientListByMobileNo(id:any) {
  let promise = new Promise((resolve, reject) => {
    let apiURL = API_URL + '/patientlist/'+id;
    this.http.get(apiURL).subscribe((res)=>{
       resolve(res.json())
    },(err)=>{
      reject(err)
    });
  });
   return promise;
}

 
getOfficeList() {
  let promise = new Promise((resolve, reject) => {
    let apiURL = API_URL + '/officelist'
    this.http.get(apiURL).subscribe((res)=>{
      resolve(res.json())
    },(err)=>{
      reject(err)
    });   
  });
  return promise;
}

getDepartmentList(id:any) {
  let promise = new Promise((resolve, reject) => {
    let apiURL = API_URL + '/departmentlist/'+id;
    this.http.get(apiURL).subscribe((res)=>{
       resolve(res.json())
    },(err)=>{
      reject(err)
    });
  });
   return promise;
}

getDoctorListByDepartmentId(id:any) {
  let promise = new Promise((resolve, reject) => {
    let apiURL = API_URL + '/doctorlist/'+id;
    this.http.get(apiURL).subscribe((res)=>{
       resolve(res.json())
    },(err)=>{
      reject(err)
    });
  });
   return promise;
}

getSlotListByDateAndDoctorId(date:any,doctorId:any) {
   //date='2017-07-31';
  console.log("date:"+date);
  // doctorId=43;
  console.log("doctorId:"+doctorId);
   let promise = new Promise((resolve, reject) => {
    let apiURL = API_URL + '/slotlist?date='+date+'&id='+ doctorId ;
    this.http.get(apiURL).subscribe((res)=>{
       resolve(res.json())
    },(err)=>{
      reject(err)
    });
  });
   return promise;
}

savePatientDetail(patientDetail:any): Promise<boolean>  {
  console.log(patientDetail);
 
 let headers = new Headers({ 'Content-Type': 'application/json' });
 let options = new RequestOptions({ headers: headers });
 let promise = new Promise<boolean>((resolve, reject) => {
   this.http.post(API_URL + '/savepatient', patientDetail, options).toPromise()
     .then(
       res => { // Success
         let body = res.json();
           resolve(true)
       },
   ).catch(() => {
     reject(false);
   })
 });
 return promise;

}
}