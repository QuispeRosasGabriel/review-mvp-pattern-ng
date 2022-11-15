import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClientInfoService } from 'src/app/services/client-info.service';
import {  takeUntil, Subject } from 'rxjs';

@Component({
  selector: 'app-client-profile-container',
  templateUrl: './client-profile.container.html',
})
export class ClientProfileContainer implements OnInit, OnDestroy {

  public clientInformation: Array<any> = [];
  public showMsgLoadingToUpdateInfo: boolean;
  private unsubscribe: Subject<void> = new Subject();



  constructor(private readonly clientInfoService: ClientInfoService) {
    this.showMsgLoadingToUpdateInfo=false 
  }

  ngOnInit(): void {
    this.clientInfoService.getUserInformation()
    .pipe(takeUntil(this.unsubscribe))
    .subscribe((value: Array<any>) => this.clientInformation = value)
  }
  
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public listenClientInformation (ev: boolean): void {
    console.log(ev)
  }

}