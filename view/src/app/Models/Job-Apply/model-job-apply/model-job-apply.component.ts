import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl, FormBuilder, FormArray } from '@angular/forms';

import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-model-job-apply',
  templateUrl: './model-job-apply.component.html',
  styleUrls: ['./model-job-apply.component.css']
})
export class ModelJobApplyComponent implements OnInit {

   Form: FormGroup;
   Type: string;
   constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
   this.Form = new FormGroup({
      Full_Name: new FormControl('', Validators.required),
      Email_Address: new FormControl('', Validators.required),
      Phone_No: new FormControl('', Validators.required),
      Experience: new FormControl('', Validators.required),
    });
  }

}
