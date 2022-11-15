import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ClientProfileRoutingModule } from './client-profile-routing.module';
import { ClientProfileComponent } from './client-profile.component';
import { ClientProfileContainer } from './client-profile.container';
import { ClientInfoService } from 'src/app/services/client-info.service';

@NgModule({
  declarations: [
    ClientProfileComponent,
    ClientProfileContainer
  ],
  imports: [
    ClientProfileRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ClientInfoService
  ],
  exports: [
    ClientProfileContainer,
  ]
})
export class ClientProfileModule { }
