import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl, FormBuilder, FormArray } from '@angular/forms';

import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
   Active_Tab = 'grid';
   results;
   _Category: any[] = ['Category-1', 'Category-2', 'Category-3'];
   _Relevance: any[] = ['less than 1 year', 'above 4 years'];
   Form: FormGroup;
   // _Series: any[] = ['Type-1', 'Type-2'];
  constructor(public http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
   this.Form = new FormGroup({
      Category: new FormControl(null, Validators.required),
      Relevance: new FormControl(null, Validators.required)
    });
   this.http.get('./assets/Company_List.json').subscribe(data => {
      this.results = data;
      console.log(this.results);
    });
  }
  Active_Tab_Change(name) {
   this.Active_Tab = name;
  }
}
