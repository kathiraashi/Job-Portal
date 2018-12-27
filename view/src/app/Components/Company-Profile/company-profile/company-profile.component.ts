import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap';

import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
   Active_Tab = 'Profile';
   data;
   results;
   bsModalRef: BsModalRef;
   Company_Id;
   CompanyData;
  constructor( private modalService: BsModalService, public http: HttpClient,  public router: Router, private active_route: ActivatedRoute) { }

  ngOnInit() {
   this.http.get('../../../../../assets/Company_List.json').subscribe(data => {
      this.results = data;
      this.active_route.url.subscribe(u => {
      this.Company_Id = this.active_route.snapshot.params['Company_Id'];
      if (this.Company_Id) {
         this.getCompanyData();
      }
   });
    });
   }
   // get Company data
  getCompanyData() {
   console.log(this.results);
   console.log(this.Company_Id);
   this.CompanyData = this.results.filter(x => x.Company_Id.toString() === this.Company_Id.toString());
   this.CompanyData = this.CompanyData[0];
   console.log(this.Company_Id);
  }
  Active_Tab_Change(name) {
   this.Active_Tab = name;
  }

}
