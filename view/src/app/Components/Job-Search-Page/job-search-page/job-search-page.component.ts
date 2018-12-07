import { Component, OnInit } from '@angular/core';


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
   bsModalRef: BsModalRef;
   constructor( private modalService: BsModalService) { }

  ngOnInit() {
  }
  Active_Tab_Change(name) {
   this.Active_Tab = name;
}

JobApply() {
   const initialState = {
      Type: 'Apply'
   };
   this.bsModalRef = this.modalService.show(ModelJobApplyComponent, Object.assign({initialState}, { class: '' }));
   }

}
