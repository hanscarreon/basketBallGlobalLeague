import { DataApiService } from './../../service/data-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  newsData : any[]
  optOne={
    loop:true,
    autoplay:true
  }
  constructor(
    private dataApi:DataApiService

  ) { 

  }

  ngOnInit() {
    this.readNews();
  }

  getMenu(){
    this.dataApi.presentActionSheet();
  }

  readNews(){
    this.dataApi.getNews().subscribe((data)=>{
      this.newsData = data.news
      console.log(data.news);
    })
  }

}
