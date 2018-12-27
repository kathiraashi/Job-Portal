import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-employer-registration',
  templateUrl: './employer-registration.component.html',
  styleUrls: ['./employer-registration.component.css']
})
export class EmployerRegistrationComponent implements OnInit {
   checked1: Boolean = false;
   Form: FormGroup;
   _Industry_Type: any[] =  ['Company', 'Consultant'];
  constructor() { }

  ngOnInit() {
   this.Form = new FormGroup({
      // Disabled: new FormControl(null)
      Email_Id: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required),
      Confirm_Password: new FormControl('', Validators.required),
      Company_Name: new FormControl('', Validators.required),
      Industry_Type: new FormControl(null, Validators.required),
      Contact_Person_Name: new FormControl('', Validators.required),
      Designation: new FormControl('', Validators.required),
      Landline: new FormControl('', Validators.required),
      Mobile_No: new FormControl('', Validators.required),
      Alternate_Email: new FormControl('', Validators.required),
      Alternate_Contact: new FormControl('', Validators.required),
      GST_Registered: new FormControl('', Validators.required),
      GSTN: new FormControl('', Validators.required),
      Terms_Conditions: new FormControl('', Validators.required),
      Receive_Promotion: new FormControl('', Validators.required),
      GST_Registration: new FormControl('', Validators.required),
    });
  }

  Register() {
   if (this.Form) {
      console.log(this.Form);
   }
}

}
