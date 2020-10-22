import { DataApiService } from './../../service/data-api.service';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
})
export class TeamListComponent implements OnInit {
  eastTeam : any[];
  westTeam : any[];
  slidesOpt = {
    autoplay:true,
    loop:true,
    initialSlide: 1,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 20
  }
  constructor(
    private dataApi : DataApiService,
    private  location : Location
  ) { }

  ngOnInit() {
    this.readTeams();
  }
  goBack(){
    this.location.back();
  }

  readTeams(){
    this.dataApi.getTeams().subscribe((data)=>{
      const allTeams  = data.teams
      let east = data.teams.filter(teams => teams.Conference == 'Eastern' )
      let west = data.teams.filter(teams => teams.Conference == 'Western' )
      console.log(allTeams)
      console.log(east)
      console.log(west)
      this.eastTeam = east
      this.westTeam = west

    })
  }

  getMenu(){
    this.dataApi.presentActionSheet();
  }
  

}
