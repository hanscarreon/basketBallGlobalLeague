import { Location } from '@angular/common';
import { DataApiService } from './../../service/data-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-players-team',
  templateUrl: './players-team.component.html',
  styleUrls: ['./players-team.component.scss'],
})
export class PlayersTeamComponent implements OnInit {
  arId;
  teamData : any[];
  teamStats : any[];
  isLoading = false;
  playersTeam : any[];
  constructor(
    private dataApi : DataApiService,
    private activedRoute : ActivatedRoute,
    private location : Location
  ) { }

  ngOnInit() {
    this.readData();
  }
  goBack(){
    this.location.back()
  }
  
  getMenu(){
    this.dataApi.presentActionSheet();
  }
  readData(){
    this.activedRoute.params.subscribe((params)=>{
      console.log(params)
      this.arId = parseInt(params.id)
    });

    this.dataApi.getTeams().subscribe((data)=>{
      let myTeam = data.teams.filter(team => team.TeamID == this.arId )
      console.log(myTeam)
      this.playersTeam = myTeam[0].players;
      this.teamData = myTeam;
    })
    
  }
  onSearchTerm(ev: CustomEvent) {
    const val = ev.detail.value;
    console.log(val)
  
    if (val && val.trim() !== '') {
      this.playersTeam = this.playersTeam.filter(term => {
        return term.FantasyDraftName.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
      });
    }else{
       this.readData();
    }
  }

}
