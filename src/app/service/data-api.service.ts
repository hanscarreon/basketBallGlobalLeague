import { element } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import {Location} from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  actionSheet:any;


  constructor(
    private http: HttpClient,
    public actionSheetController: ActionSheetController,
    private nav : NavController,
    private location : Location
  ) { }

  getNews(){
   return  this.http.get<any>('/assets/json/news.json')
  }
  getTeams(){
    return this.http.get<any>('/assets/json/teams.json')
  }
  getResult(){
    return this.http.get<any>('/assets/json/result.json')
  }
  getStadium(){
    return this.http.get<any>('/assets/json/stadiums.json')
  }
  presentActionSheet() {
    this.actionSheet = this.actionSheetController.create({
      header: 'Menu',
      buttons: [
        {
          text: 'Home',
          handler: () => {
            this.nav.navigateForward(['home'])
          }
        }, 
        {
          text: 'Teams',
          handler: () => {
            console.log('Share clicked');
            this.nav.navigateForward(['teams'])

          }
        },
        {
          text: 'Players',
          handler: () => {
            console.log('Share clicked');
            this.nav.navigateForward(['players'])

          }
        },
        {
          text: 'News',
          handler: () => {
            this.nav.navigateForward(['news'])
          }
        }, 
        {
          text: 'Stadium',
          handler: () => {
            this.nav.navigateForward(['stadium'])
          }
        }, 
        {
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
    ]
    }).then(actionsheet => {
      actionsheet.present();
    });
  }
  backClicked() {
    this.location.back()
  }
}
