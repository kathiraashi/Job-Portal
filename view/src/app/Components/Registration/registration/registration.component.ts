import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   Form: FormGroup;
  constructor() { }

  ngOnInit() {
     this.Form = new FormGroup({
      Name: new FormControl('', Validators.required),
      Email: new FormControl('', Validators.required),
      Location: new FormControl('', Validators.required),
      Phone_No: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required),
      Confirm_Password: new FormControl('', Validators.required),
     });
  }
}
