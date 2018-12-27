import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl, AbstractControl, FormBuilder, FormArray } from '@angular/forms';


import {HttpClient } from '@angular/common/http';


import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap';

import { ModelJobApplyComponent } from '../../../Models/Job-Apply/model-job-apply/model-job-apply.component';

@Component({
  selector: 'app-job-search-page',
  templateUrl: './job-search-page.component.html',
  styleUrls: ['./job-search-page.component.css']
})
export class JobSearchPageComponent implements OnInit {
   Active_Tab = 'Newest_Job';
   Active_Tab1 = 'grid';
   bsModalRef: BsModalRef;
   results;
   Form: FormGroup;
   _Job_Type: any[] = ['Type-1', 'Type-2'];
   _Experience_Level: any[] = ['Level-1', 'Level-2'];
   _Relevance: any[] = ['less than 1 year', 'above 4 years'];
   constructor( private modalService: BsModalService, public http: HttpClient, public router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
   this.Form = new FormGroup({
      Job_Type: new FormControl(null, Validators.required),
      Experience_Level: new FormControl(null, Validators.required),
      Relevance: new FormControl(null, Validators.required)
    });
   this.http.get('./assets/Find_Jobs.json').subscribe(data => {
      this.results = data;
      console.log(this.results);
    });
  }
  Active_Tab_Change(name) {
   this.Active_Tab = name;
}
Active_Tab1_Change(name) {
   this.Active_Tab = name;
}

JobApply() {
   const initialState = {
      Type: 'Apply'
   };
   this.bsModalRef = this.modalService.show(ModelJobApplyComponent, Object.assign({initialState}, { class: '' }));
   }

}
