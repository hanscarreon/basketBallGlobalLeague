import { DataApiService } from './../../service/data-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-stadium-list',
  templateUrl: './stadium-list.component.html',
  styleUrls: ['./stadium-list.component.scss'],
})
export class StadiumListComponent implements OnInit {
  teamID;
  isLoading = false;
  stadiumData : any[]
  constructor(
    private dataApi: DataApiService,
    private activedRoute: ActivatedRoute,
    private loadingController : LoadingController
    
  ) { }

  ngOnInit() {
    this.showHideAutoLoader();
    this.readData();
  }

  getMenu(){
    this.dataApi.presentActionSheet();
  }

  readData(){
    this.activedRoute.params.subscribe((params)=>{
      this.teamID = params.id
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

  onSearchTerm(ev: CustomEvent) {
    const val = ev.detail.value;
    console.log(val)
  
    if (val && val.trim() !== '') {
      this.stadiumData = this.stadiumData.filter(term => {
        return term.Name.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
      });
    }else{
       this.readData();
    }
  }


}
