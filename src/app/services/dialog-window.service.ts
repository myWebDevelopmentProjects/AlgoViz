import { Injectable } from '@angular/core';
import { DialogWindowComponent } from '../components/dialog-window/dialog-window.component';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DialogWindowService {

  dialogWindowComponent: DialogWindowComponent;
  msg: string;
  private SShowWindow = new Subject<any>();

  constructor() {}

  // Observable string streams
  showWindow = this.SShowWindow.asObservable();

  // Service message commands
  call_showWindow() {
    this.SShowWindow.next();
  }

  // todo: should be removed?
  callDialogWindow(msg: string): void {
    this.dialogWindowComponent.show = true;
    this.dialogWindowComponent.msg = msg;
  }

}
