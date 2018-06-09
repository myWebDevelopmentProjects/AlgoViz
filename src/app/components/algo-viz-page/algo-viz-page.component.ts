import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogWindowService } from '../../services/dialog-window.service';
import { TranslateService } from '../../services/translate.service';
import { SchemaParserService } from '../../services/schema-parser.service';
import { AlgovizEngineService } from '../../services/algoviz-engine.service';
import { BstNonBalancingAdd } from '../../algorithms/bst-non-balancing-add';
import * as $ from 'jquery';


@Component({
  selector: 'app-algo-viz-page',
  templateUrl: './algo-viz-page.component.html',
  styleUrls: ['./algo-viz-page.component.scss']
})

export class AlgoVizPageComponent implements OnInit  {

  typeOfAnimation: string;
  bstNonBalancingAdd: BstNonBalancingAdd;
  currentAnimation = [];

  // Масив для даних, якими буде заповнюватись дерево

  algovizEngineService: AlgovizEngineService;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialogWindowService: DialogWindowService,
    private translate: TranslateService,

    private schema: SchemaParserService
  ) {
      this.algovizEngineService = new AlgovizEngineService();
      this.bstNonBalancingAdd = new BstNonBalancingAdd(this.algovizEngineService, this.translate);
      console.log('translate', translate.data);
      console.log('schema ', schema.data['schema']);
      this.typeOfAnimation = this.route.snapshot.paramMap.get('type');
      this.algovizEngineService.currentProceduerName = 'Default';
      this.algovizEngineService.currentHandlingItem = 0;
      this.updateCurrentProcedureCode(schema.data['schema'][this.typeOfAnimation]);
  }

  routeIndex(): void {
    this.router.navigate(['/']);
  }

  updateProceduresList(procedures: object[]): void {
    console.log('procedures', procedures);
    let i = 0;
    const max = procedures.length;
    while (i < max) {
      const line = {current: procedures[i]['current'], id: procedures[i]['id'] };
      this.algovizEngineService.proceduersList.push(line);
      i++;
    }
  }

  updateCurrentProcedureCode(current_procedure: object): void {
    let i = 0;
    const max = current_procedure['procedures'].length;
    //
    this.updateProceduresList(current_procedure['procedures']);
    //
    while (i < max) {
      if (current_procedure['procedures'][i].current) {
        const procedure = current_procedure['procedures'][i];
        this.algovizEngineService.currentProceduerName = procedure.id + procedure.args;
        this.updateCurrentInstructionsCode(procedure.instructions, 0 , 0, 0);
      }
      i++;
      break;
    }
   }

  updateCurrentInstructionsCode(instructions: object[], audio: number, comment: number, currentLine: number) {
    let i = 0;
    const max = instructions.length;
    this.algovizEngineService.currentInstructionAudio = instructions[0]['comment-audio'];
    this.algovizEngineService.currentInstructionComment = instructions[0]['comment-text'];
    this.algovizEngineService.currentInstructionAction = instructions[0]['action'];
    while (i < max) {
      const current = i === currentLine ? true : false;
      const line = {current: current, code: instructions[i]['code'] };
      this.algovizEngineService.currentProceduerCode.push(line);
      i++;
    }
  }

  callDialogWindow(): void {
    this.dialogWindowService.msg = this.translate.data['ERROR'];
    this.dialogWindowService.call_showWindow();
  }

  ngOnInit() {
    var self = this;

    // Функція для оновлення аудіофайлу коментарів
    const call_new_Node = function() {
        var item = $('.item_list_0' + self.algovizEngineService.currentHandlingItem);
        item.animate({left: '352px', top: '48px'}, 'slow');
        console.log(item.html());
      self.algovizEngineService.currentHandlingItem++;
    };

    // Функція для оновлення аудіофайлу коментарів
    const Insert_Node = function() {
        var item = $('.item_list_0' + self.algovizEngineService.currentHandlingItem);
        item.animate({left: '352px', top: '48px'}, 'slow');
        console.log(item.html());
      self.algovizEngineService.currentHandlingItem++;
    };

    const endProcedure = function(){

    }

    $(document).ready(function(){
      $('.start').click(function(){
        /*
        setInterval(function(){
          console.log(self.currentInstructionAction);
        }, 5000);
        */
        console.log('start', self.algovizEngineService.currentHandlingItem);
        call_new_Node();
      });
    });
  }

}
