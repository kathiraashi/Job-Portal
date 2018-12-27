import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-employer-sign-in',
  templateUrl: './employer-sign-in.component.html',
  styleUrls: ['./employer-sign-in.component.css']
})
export class EmployerSignInComponent implements OnInit {
   Form: FormGroup;
   constructor() { }

   ngOnInit() {
      this.Form = new FormGroup({
         Email_Id: new FormControl('', Validators.required),
         Password: new FormControl('', Validators.required),
      });
   }
   submit() {
      if (this.Form) {
         console.log(this.Form);
      }
   }
}
