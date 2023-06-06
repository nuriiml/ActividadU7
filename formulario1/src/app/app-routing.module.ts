import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageFormComponent } from './page-form/page-form.component';

const routes: Routes = [
  {path:'', component:PageFormComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
