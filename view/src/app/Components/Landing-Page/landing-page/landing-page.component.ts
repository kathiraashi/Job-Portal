import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {HttpClient } from '@angular/common/http';

import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap';

import { ModelJobApplyComponent } from '../../../Models/Job-Apply/model-job-apply/model-job-apply.component';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
   bsModalRef: BsModalRef;
   results;
   constructor( private modalService: BsModalService, public http: HttpClient, public router: Router) { }

  ngOnInit() {
   //   const data: any = require('./../../../../assets/Latest_Jobs.json');

   //   console.log(data);
   this.http.get('./assets/Find_Jobs.json').subscribe(data => {
      this.results = data;
      console.log(this.results);
    });


  }


  JobApply() {
   const initialState = {
      Type: 'Apply'
   };
   this.bsModalRef = this.modalService.show(ModelJobApplyComponent, Object.assign({initialState}, { class: '' }));
   }


}
