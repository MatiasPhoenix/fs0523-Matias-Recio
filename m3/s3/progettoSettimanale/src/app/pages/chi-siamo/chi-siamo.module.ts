import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChiSiamoRoutingModule } from './chi-siamo-routing.module';
import { ChiSiamoComponent } from './chi-siamo.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChiSiamoComponent
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    FormsModule,
    ChiSiamoRoutingModule

  ]
})
export class ChiSiamoModule { }
