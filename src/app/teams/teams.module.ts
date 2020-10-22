import { TeamViewComponent } from './team-view/team-view.component';
import { TeamListComponent } from './team-list/team-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamsPageRoutingModule } from './teams-routing.module';

import { TeamsPage } from './teams.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamsPageRoutingModule
  ],
  declarations: [
    TeamsPage,
    TeamListComponent,
    TeamViewComponent
  ]
})
export class TeamsPageModule {}
