import { PlayersListComponent } from './players-list/players-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayersPageRoutingModule } from './players-routing.module';

import { PlayersPage } from './players.page';
import { PlayersTeamComponent } from './players-team/players-team.component';
import { PlayersInfoComponent } from './players-info/players-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayersPageRoutingModule
  ],
  declarations: [
    PlayersPage,
    PlayersTeamComponent,
    PlayersInfoComponent,
    PlayersListComponent
  ]
})
export class PlayersPageModule {}
