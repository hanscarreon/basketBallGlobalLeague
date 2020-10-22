import { DataApiService } from './../../service/data-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import {Location} from '@angular/common';

@Component({
  selector: 'app-players-info',
  templateUrl: './players-info.component.html',
  styleUrls: ['./players-info.component.scss'],
})
export class PlayersInfoComponent implements OnInit {
  teamIDs;
  playerIDs;
  teamData : any[];
  teamStats : any[];
  isLoading = false;
  playersTeam : any[];
  playerData : any[];
  constructor(
    private dataApi : DataApiService,
    private activedRoute : ActivatedRoute,
    private loadingController : LoadingController,
    private location : Location

    
  ) { }

  ngOnInit() {
    this.showHideAutoLoader()
    this.readData()
  }

  goBack(){
    this.location.back();
  }
  
  getMenu(){
    this.dataApi.presentActionSheet();
  }

  readData(){
    this.activedRoute.params.subscribe((params)=>{
      console.log(params)
      this.teamIDs = parseInt(params.teamID)
      this.playerIDs = parseInt(params.playerID)
    });

    this.dataApi.getTeams().subscribe((data)=>{
      let myTeam = data.teams.filter(team => team.TeamID == this.teamIDs )
      let myplayer = myTeam[0].players.filter(players => players.PlayerID == this.playerIDs)
      console.log(myplayer)
      console.log(myTeam)
      
      this.playersTeam = myTeam[0].players;
      this.teamData = myTeam;
      this.playerData = myplayer;
    })
    
  }

  showHideAutoLoader() {

    this.loadingController.create({
      message: 'Fetching Data',
      duration: 2000
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed! after 2 Seconds', dis);
        this.isLoading = true
      });
    });

  } // show loader

}
