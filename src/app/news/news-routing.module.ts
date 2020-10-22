import { NewsViewComponent } from './news-view/news-view.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsPage } from './news.page';

const routes: Routes = [
  {
    path: '',
    component: NewsPage,
    children:
    [
      {
        path:'',
        component:NewsListComponent
      },
      {
        path:'view/:id',
        component:NewsViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsPageRoutingModule {}
