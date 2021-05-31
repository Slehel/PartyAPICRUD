import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndividualsListComponent } from './components/individuals-list/individuals-list.component';
import { AddIndividualComponent } from './components/add-individual/add-individual.component';

const routes: Routes = [
  { path: '', redirectTo: 'accounts', pathMatch: 'full' },
  { path: 'accounts', component: IndividualsListComponent },
  { path: 'add', component: AddIndividualComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
