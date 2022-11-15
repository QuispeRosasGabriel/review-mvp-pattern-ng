import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {

  @Input() public clientInformation: Array<any> = [];
  @Output() public readonly updaterClientInfo: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    console.log('client input', this.clientInformation)
  }

  public updateInformation(): void {
    this.updaterClientInfo.emit(true);
  }

}
