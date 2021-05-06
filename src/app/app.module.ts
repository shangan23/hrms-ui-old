import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SimpleModule } from './layout/simple/simple.module';
import { RegionComponent } from './layout/region/region.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    RegionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
