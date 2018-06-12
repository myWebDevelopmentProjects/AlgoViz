import { Injectable } from '@angular/core';

@Injectable()
export class AlgovizEngineService {

  currentProcedureName: string;
  currentProcedureCode: any[] = [];
  currentInstructionComment: string;
  currentInstructionAction: string;

  proceduersList: any[] = [];
  currentInstructionAudio: string;
  itemList: number[] = [];
  animation: object[] = [];
  BST: object[] = [];
  timePeriod: number;

  constructor() {
    this.initItemList();
    this.timePeriod = 1000;
  }

  initBST() {

  }

  initItemList(): void {
    let i = 0;
    const MAX = 20;
    for (i; i < MAX; i++) {
      this.itemList.push(i);
    }
  }

}
