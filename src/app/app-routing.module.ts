import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleComponent } from './layout/simple/simple.component';
import { SummaryFormComponent } from './summary-form/summary-form.component';

const routes: Routes = [
  {
    path: '',
    component: SimpleComponent,
    children:[{
      path: 'summary',
      component : SummaryFormComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
