import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';

import { MAIN_ROUTES } from './main-routes';
import { MapComponent } from './map/map.component';
import { LeftBlockComponent } from './left-block/left-block.component';
import { RightBlockComponent } from './right-block/right-block.component';
import {MainService} from './main.service';


@NgModule({
  declarations: [MainComponent, MapComponent, LeftBlockComponent, RightBlockComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MAIN_ROUTES)
  ],
  providers: [
    MainService
  ]
})
export class MainModule { }
