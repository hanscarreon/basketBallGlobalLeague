import { DataApiService } from './../../service/data-api.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss'],
})
export class NewsViewComponent implements OnInit {
  isLoading = false;
  newsData : any[];
  ACNews: any[];
  dataID;
  constructor(
    private dataApi : DataApiService,
    private loadingController :LoadingController,
    private activedRoute : ActivatedRoute,
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
      this.dataID = parseInt(params.id)
    });
    

    this.dataApi.getNews().subscribe((data)=>{
      console.log(data.news);
      this.newsData = data.news
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
