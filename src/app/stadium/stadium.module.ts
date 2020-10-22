import { StadiumViewComponent } from './stadium-view/stadium-view.component';
import { StadiumListComponent } from './stadium-list/stadium-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StadiumPageRoutingModule } from './stadium-routing.module';

import { StadiumPage } from './stadium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StadiumPageRoutingModule
  ],
  declarations: [
    StadiumPage,
    StadiumListComponent,
    StadiumViewComponent
  ]
})
export class StadiumPageModule {}
