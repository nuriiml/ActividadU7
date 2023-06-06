import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageForm2Component } from './page-form2/page-form2.component';

const routes: Routes = [
  {path: '', component:PageForm2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
