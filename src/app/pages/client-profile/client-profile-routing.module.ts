import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClientProfileContainer } from './client-profile.container';

const route: Routes = [
  { 
    path: '', 
    component: ClientProfileContainer
  }
];

@NgModule({
  imports: [ RouterModule.forChild(route) ],
  exports: [ RouterModule ]
})
export class ClientProfileRoutingModule { }