import { DataApiService } from './../../service/data-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import {Location} from '@angular/common';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.scss'],
})
export class TeamViewComponent implements OnInit {
  arId;
  teamData : any[];
  teamStats : any[];
  isLoading = false;
  constructor(
    private dataApi : DataApiService,
    private activedRoute : ActivatedRoute,
    private loadingController : LoadingController,
    private location : Location

  ) { }

  ngOnInit() {
    this.showHideAutoLoader();
    this.readData();
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
      this.arId = parseInt(params.id)
    });

    this.dataApi.getTeams().subscribe((data)=>{
      let myTeam = data.teams.filter(team => team.TeamID == this.arId )
      console.log(myTeam)
      this.teamData = myTeam;
    })
    this.dataApi.getResult().subscribe((data)=>{
      let myStats = data.results.filter(stats => stats.TeamID == this.arId )
      console.log(myStats)
      this.teamStats = myStats;
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
