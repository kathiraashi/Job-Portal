import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl, FormBuilder, FormArray } from '@angular/forms';

import {NativeDateAdapter} from '@angular/material';
import {DateAdapter} from '@angular/material/core';

export class MyDateAdapter extends NativeDateAdapter {
   format(date: Date, displayFormat: Object): string {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
   }
}

@Component({
  selector: 'app-job-seeker-registration',
  templateUrl: './job-seeker-registration.component.html',
  styleUrls: ['./job-seeker-registration.component.css'],
  providers: [{provide: DateAdapter, useClass: MyDateAdapter}]
})
export class JobSeekerRegistrationComponent implements OnInit {
   minDate = new Date();
   checked1: Boolean = false;
   Form: FormGroup;
   _Status: any[] =  ['Pursuing', 'Completed'];
   _City: any[] =  ['Chennai', 'Bangalore'];
   _State: any[] =  ['TamilNadu', 'Karnataka'];
   _Country: any[] =  ['India', 'US'];
  constructor() { }

  ngOnInit() {
   this.Form = new FormGroup({
      Name: new FormControl('', Validators.required),
      Date_Of_Birth: new FormControl('', Validators.required),
      FatherName: new FormControl('', Validators.required),
      MotherName: new FormControl('', Validators.required),
      AlternateMail: new FormControl(),
      AlternateContact: new FormControl(),
      City: new FormControl(null, Validators.required),
      State: new FormControl(null, Validators.required),
      Country: new FormControl(null, Validators.required),
      Course: new FormControl('', Validators.required),
      Institution: new FormControl('', Validators.required),
      University: new FormControl('', Validators.required),
      CompanyName: new FormControl('', Validators.required),
      Designation: new FormControl('', Validators.required),
      Responsibilities: new FormControl(),
      From: new FormControl('', Validators.required),
      To: new FormControl('', Validators.required),
      Languages: new FormControl('', Validators.required),
      Course_Name: new FormControl('', Validators.required),
      Institution_Name: new FormControl('', Validators.required),
      Duration_From: new FormControl(),
      Duration_To: new FormControl(),
      Status: new FormControl(null, Validators.required),
      About_Yourself: new FormControl(),
      Experience: new FormControl('', Validators.required),
      Preferred_Location: new FormControl('', Validators.required),
      items: new FormArray([])
    });
    this.addItem();

    setTimeout(() => {
       console.log(this.Form);
    }, 5000);
  }

  createItem() {
   return new FormGroup({
      CompanyName:  new FormControl(),
      Designation: new FormControl(),
      Responsibilities: new FormControl(),
      From: new FormControl(),
      To: new FormControl(),
   });

}
addItem(): void {
   const items = <FormArray>this.Form.controls['items'];
   items.push(this.createItem());
 }
 Delete(index: number) {
   // control refers to your formarray
   const control = <FormArray>this.Form.controls['items'];
   // remove the chosen row
   control.removeAt(index);
}
update() {
   if (this.Form) {
      console.log(this.Form);
   }
}

}
