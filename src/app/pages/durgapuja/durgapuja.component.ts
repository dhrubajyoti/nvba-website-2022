import { Component, OnInit } from '@angular/core';
import { GetjsonfileService } from './../../services/getjsonfile.service';

@Component({
  selector: 'app-durgapuja',
  templateUrl: './durgapuja.component.html',
  styleUrls: ['./durgapuja.component.scss']
})
export class DurgapujaComponent implements OnInit {
  sliderImage : any;

  constructor( private jsonFile:GetjsonfileService) {}

  ngOnInit(): void {
    this.jsonFile.pageData('durgapujaSliderImage').subscribe(data => {
   //   console.log(data);
      this.sliderImage = data;
    });


  }

}
