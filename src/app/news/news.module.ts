import { NewsViewComponent } from './news-view/news-view.component';
import { NewsListComponent } from './news-list/news-list.component';
import { ViewListComponent } from './view-list/view-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsPageRoutingModule } from './news-routing.module';

import { NewsPage } from './news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsPageRoutingModule
  ],
  declarations: [
    NewsPage,
    NewsViewComponent,
    NewsListComponent
  ]
})
export class NewsPageModule {}
