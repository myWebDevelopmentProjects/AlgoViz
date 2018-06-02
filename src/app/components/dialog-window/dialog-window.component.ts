import { Component, OnInit } from '@angular/core';
import { DialogWindowService } from '../../services/dialog-window.service';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.scss']
})
export class DialogWindowComponent implements OnInit {

  show: boolean;
  hide: boolean;
  msg: string;

  constructor (
    private dialogWindowService: DialogWindowService
  ) {
    this.show = false;
    this.hide = false;
    this.msg = '';
    this.dialogWindowService.showWindow.subscribe(
      () => {
        this.showDialogWindow();
        this.msg = this.dialogWindowService.msg;
      }
    );
  }

  showDialogWindow(): void {
    this.show = true;
  }

  closeDialogWindow(): void {
    this.show = false;
  }

  ngOnInit() {
  }

}
