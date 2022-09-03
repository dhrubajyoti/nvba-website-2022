import { Component, OnInit } from '@angular/core';
import { GetjsonfileService } from './../../../services/getjsonfile.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss']
})
export class DonationsComponent implements OnInit {
  donors: any;
  constructor(private jsonFile:GetjsonfileService) { }

  ngOnInit(): void {
    this.jsonFile.pageData('donors').subscribe(data => {
      console.log(data);
      this.donors = data;
    });
  }

}
