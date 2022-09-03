import { Component, OnInit } from '@angular/core';
import { GetjsonfileService } from './../../../services/getjsonfile.service';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  nvbaTeam : any;
  constructor(private jsonFile:GetjsonfileService) { }

  ngOnInit(): void {
    this.jsonFile.pageData('ecm').subscribe(data => {
         console.log(data);
         this.nvbaTeam = data;
       });
  }

}
