import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SimpleComponent } from './simple.component';
import { RegionModule } from './../region/region.module';


@NgModule({
  declarations: [
    SimpleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RegionModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SimpleModule { }
