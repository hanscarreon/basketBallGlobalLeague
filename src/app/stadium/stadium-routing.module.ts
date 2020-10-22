import { StadiumListComponent } from './stadium-list/stadium-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StadiumPage } from './stadium.page';
import { StadiumViewComponent } from './stadium-view/stadium-view.component';

const routes: Routes = [
  {
    path: '',
    component: StadiumPage,
    children:
    [
      {
        path: '',
        component: StadiumListComponent
      },
      {
        path : 'view/:id',
        component : StadiumViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StadiumPageRoutingModule {}
