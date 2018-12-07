import { Component, OnInit } from '@angular/core';


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
   constructor( private modalService: BsModalService) { }

  ngOnInit() {
  }

  JobApply() {
   const initialState = {
      Type: 'Apply'
   };
   this.bsModalRef = this.modalService.show(ModelJobApplyComponent, Object.assign({initialState}, { class: '' }));
   }


}
