import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-model-job-apply',
  templateUrl: './model-job-apply.component.html',
  styleUrls: ['./model-job-apply.component.css']
})
export class ModelJobApplyComponent implements OnInit {


   Type: string;
   constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
