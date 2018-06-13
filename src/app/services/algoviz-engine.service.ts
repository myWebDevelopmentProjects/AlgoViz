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
    this.timePeriod = 1000;
    this.itemList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

}
