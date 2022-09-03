import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GetjsonfileService } from './../../services/getjsonfile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dataObject :any={};

  private _jsonURL = '/assets/data/pages/header.json';

   constructor(private jsonFile:GetjsonfileService) {}


  ngOnInit(): void {
    this.jsonFile.pageData('header').subscribe(data => {
         this.dataObject = JSON.parse( JSON.stringify(data ) )
       });
  }

}
