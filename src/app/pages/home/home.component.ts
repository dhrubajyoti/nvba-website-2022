import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { GetjsonfileService } from './../../services/getjsonfile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sliderImage : any;

  constructor( private jsonFile:GetjsonfileService) {}

  ngOnInit(): void {
    this.jsonFile.pageData('homeSliderImage').subscribe(data => {
   //   console.log(data);
      this.sliderImage = data;
    });


  }




}
