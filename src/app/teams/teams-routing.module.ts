import { TeamViewComponent } from './team-view/team-view.component';
import { TeamListComponent } from './team-list/team-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsPage } from './teams.page';

const routes: Routes = [
  {
    path: '',
    component: TeamsPage,
    children:[
      {
        path:'',
        component:TeamListComponent
      },
      {
        path: 'view/:id',
        component: TeamViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsPageRoutingModule {}
