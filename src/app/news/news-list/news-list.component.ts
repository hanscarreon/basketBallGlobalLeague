import { DataApiService } from './../../service/data-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {

  constructor(
    private dataApi:DataApiService

  ) { 

  }

  ngOnInit() {
    this.readNews();
  }

  readNews(){
    this.dataApi.getNews().subscribe((data)=>{
      console.log(data);
    })
  }

}
