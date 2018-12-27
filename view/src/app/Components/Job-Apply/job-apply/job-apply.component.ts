import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap';

import {HttpClient } from '@angular/common/http';

import { ModelJobApplyComponent } from '../../../Models/Job-Apply/model-job-apply/model-job-apply.component';
// import { constructDependencies } from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.css']
})
export class JobApplyComponent implements OnInit {
   data;
   results: any[] = [];
   bsModalRef: BsModalRef;
   job_id;
   JobData;
   constructor( private modalService: BsModalService, public http: HttpClient,  public router: Router, private active_route: ActivatedRoute) { }

  ngOnInit() {
   this.http.get('../../../../assets/Find_Jobs.json').subscribe((data: any[]) => {
      this.results = data;
      this.active_route.url.subscribe(u => {
      this.job_id = this.active_route.snapshot.params['job_id'];
      if (this.job_id) {
         this.getJobData();
      }
   });
    });
  }

  // get job data
  getJobData() {
   console.log(this.results);
   console.log(this.job_id);
   const _index = this.results.findIndex(obj => obj.job_id.toString() === this.job_id);
   console.log(_index);
   const matchData = this.results.splice(_index, 1);
   this.JobData = matchData[0];
   console.log(this.JobData);
   console.log(this.results);

  }
  JobApply() {
   const initialState = {
      Type: 'Apply'
   };
   this.bsModalRef = this.modalService.show(ModelJobApplyComponent, Object.assign({initialState}, { class: '' }));
   }

}


