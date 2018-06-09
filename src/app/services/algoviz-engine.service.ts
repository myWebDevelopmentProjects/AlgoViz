import { Injectable } from '@angular/core';

@Injectable()
export class AlgovizEngineService {

  currentProceduerName: string;
  currentProceduerCode: any[] = [];
  currentInstructionComment: string;
  currentInstructionAction: string;

  proceduersList: any[] = [];
  currentInstructionAudio: string;
  currentHandlingItem: number;
  itemList: number[] = [];
  animation: object[] = [];

  constructor() {
    this.initItemList();
  }

  initItemList(): void {
    let i = 0;
    const MAX = 20;
    for (i; i < MAX; i++) {
      this.itemList.push(i);
    }
  }

}
