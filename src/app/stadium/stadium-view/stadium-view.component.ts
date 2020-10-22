import { Location } from '@angular/common';
import { DataApiService } from './../../service/data-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-stadium-view',
  templateUrl: './stadium-view.component.html',
  styleUrls: ['./stadium-view.component.scss'],
})
export class StadiumViewComponent implements OnInit {
  isLoading = false;
  stadiumData : any;
  stadID;
  constructor(
    private activedRoute: ActivatedRoute,
    private dataApi : DataApiService,
    private loadingController : LoadingController,
    private location : Location
  ) { }

  ngOnInit() {
    this.showHideAutoLoader()
    this.readData();
  }

  getMenu(){
    this.dataApi.presentActionSheet();
  }

  goBack(){
    this.location.back();
  }

  readData(){
    this.activedRoute.params.subscribe((params)=>{
      this.stadID = params.id
      console.log(params)
    })

    this.dataApi.getStadium().subscribe((data)=>{
      const stads  = data.stadiums
      console.log(stads)
      this.stadiumData = data.stadiums
      // let myteam = data.teams.filter(teams => teams.Conference == 'Western' )

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
