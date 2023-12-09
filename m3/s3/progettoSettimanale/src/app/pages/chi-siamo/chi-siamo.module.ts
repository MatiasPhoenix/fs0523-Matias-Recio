import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChiSiamoRoutingModule } from './chi-siamo-routing.module';
import { ChiSiamoComponent } from './chi-siamo.component';
import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ChiSiamoComponent,
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    FormsModule,
    ChiSiamoRoutingModule,


  ]

})
export class ChiSiamoModule { }
