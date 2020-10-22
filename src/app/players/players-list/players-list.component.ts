import { Location } from '@angular/common';
import { DataApiService } from './../../service/data-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss'],
})
export class PlayersListComponent implements OnInit {
  arId;
  teamData : any[];
  teamStats : any[];
  isLoading = false;
  playersTeam : any[];
  constructor(
    private dataApi :  DataApiService,
    private location : Location

  ) { }

  ngOnInit() {
    this.readData()
  }

  goBack(){
    this.location.back();
  }
  getMenu(){
    this.dataApi.presentActionSheet();
  }

  readData(){
    this.dataApi.getTeams().subscribe((data)=>{
      console.log(data);
      this.teamData = data.teams
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
