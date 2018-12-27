import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css']
})
export class JobPostComponent implements OnInit {
   Form: FormGroup;
   _Job_Type: any[] =  ['Type-1', 'Type-2'];
   _Category: any[] =  ['Category-1', 'Category-2'];
   _Availability: any[] =  ['Full Time', 'Part Time'];
   _Experience_Level: any[] =  ['Level-1', 'Level-2'];
   _Languages: any[] =  ['Tamil', 'English'];
  constructor() { }

  ngOnInit() {
   this.Form = new FormGroup({
      Job_Type: new FormControl(null, Validators.required),
      Category: new FormControl(null, Validators.required),
      Availability: new FormControl(null, Validators.required),
      Experience_Level: new FormControl(null, Validators.required),
      Languages: new FormControl(null, Validators.required)
   });
}
}
