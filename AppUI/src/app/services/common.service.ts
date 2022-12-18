import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  @Output() opLoginClickedEvent = new EventEmitter<string>();
  constructor() { }
  LoginClickedEvent(msg: string) {
    this.opLoginClickedEvent.emit(msg);
  }
  
}
