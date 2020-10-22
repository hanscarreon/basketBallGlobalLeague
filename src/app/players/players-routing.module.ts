import { PlayersTeamComponent } from './players-team/players-team.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersPage } from './players.page';
import { PlayersInfoComponent } from './players-info/players-info.component';

const routes: Routes = [
  {
    path: '',
    component: PlayersPage,
    children : [
      {
        path:'',
        component: PlayersListComponent
      },
      {
        path:'teams/:id',
        component: PlayersTeamComponent
      },
      {
        path:'info/:teamID/:playerID',
        component: PlayersInfoComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayersPageRoutingModule {}
