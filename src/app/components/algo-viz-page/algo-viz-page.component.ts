import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogWindowService } from '../../services/dialog-window.service';
import { TranslateService } from '../../services/translate.service';
import { SchemaParserService } from '../../services/schema-parser.service';
import { AlgovizEngineService } from '../../services/algoviz-engine.service';
import { BstNonBalancingAdd } from '../../algorithms/bst-non-balancing-add';
import { BstLocalBalancingAmortization } from '../../algorithms/bst-local-balancing-amortization';
import { BstLocalBalancingOptimization } from '../../algorithms/bst-local-balancing-optimization';
import { BstLocalBalancingRandom } from '../../algorithms/bst-local-balancing-random';

import * as $ from 'jquery';

@Component({
  selector: 'app-algo-viz-page',
  templateUrl: './algo-viz-page.component.html',
  styleUrls: ['./algo-viz-page.component.scss']
})

export class AlgoVizPageComponent implements OnInit  {

  typeOfAnimation: string;
  bstNonBalancingAdd: BstNonBalancingAdd;
  bstLocalBalancingAmortization: BstLocalBalancingAmortization;
  bstLocalBalancingOptimization: BstLocalBalancingOptimization;
  bstLocalBalancingRandom: BstLocalBalancingRandom;
  currentAnimationStep: number;
  currentKeyFrameNumber: number;
  items: number[];
 // блокування зайвих натсикувань на кнопку СТАРТ
  isAnimationIaActive: boolean;
  BST: object [] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialogWindowService: DialogWindowService,
    private translate: TranslateService,
    private algovizEngineService: AlgovizEngineService,
    private schema: SchemaParserService
  ) {
      this.isAnimationIaActive = false;
    // this.algovizEngineService = new AlgovizEngineService();
    this.items = algovizEngineService.itemList;
      this.currentAnimationStep = 0;
      // для відображення крок анімації починається з одиниці
      this.currentKeyFrameNumber = 1;
    // this.algovizEngineService = new AlgovizEngineService();
      this.typeOfAnimation = this.route.snapshot.paramMap.get('type');
      switch (this.typeOfAnimation) {
        case 'bst_non_balancing_add':
          this.bstNonBalancingAdd = new BstNonBalancingAdd(algovizEngineService, this.translate, this.schema);
          console.log('schema ', schema.data['schema']);
          break;
        case 'bst_local_balancing_random':
          this.bstLocalBalancingRandom = new BstLocalBalancingRandom(algovizEngineService, this.translate, this.schema);
          console.log('schema ', schema.data['schema']);
          break;
        case 'bst_local_balancing_amortization':
          this.bstLocalBalancingAmortization = new BstLocalBalancingAmortization(algovizEngineService, this.translate, this.schema);
          console.log('schema ', schema.data['schema']);
          break;
        case 'bst_local_balancing_optimization':
          this.bstLocalBalancingOptimization = new BstLocalBalancingOptimization(algovizEngineService, this.translate, this.schema);
          console.log('schema ', schema.data['schema']);
          break;
        default:
          console.log('no typeOfAnimation');
      }
      this.updateAlgoVizView();
  }

  routeIndex(): void {
    this.router.navigate(['/']);
  }

  /**
   * Оновлення списку процедур
   * @param {Object[]} procedures
   * @param {string} id
   */
  updateProceduresList(procedures: object[], id: string): void {
    this.algovizEngineService.proceduersList = [];
    let i = 0;
    const max = procedures.length;
    while (i < max) {
      let current: boolean;
      if (procedures[i]['id'] === id) {
        current = true;
      } else {
        current = false;
      }
      const line = {current: current, id: procedures[i]['id'] };
      this.algovizEngineService.proceduersList.push(line);
      i++;
    }
  }

  /**
   *  метод для постійного оновлення поточного кадру анімації
   */
  updateAlgoVizView(): void {
    console.log(this.algovizEngineService.animation);
    const currentProcedure = this.schema.data['schema'][this.typeOfAnimation];
    const currentAnimationStep = this.algovizEngineService.animation[this.currentAnimationStep];
    const max = currentProcedure['procedures'].length;
    //
    this.updateProceduresList(currentProcedure['procedures'], this.algovizEngineService.animation[this.currentAnimationStep]['id']);
    //
    this.algovizEngineService.currentInstructionAudio = currentAnimationStep['commentAudio'];
    this.algovizEngineService.currentInstructionComment = currentAnimationStep['commentText'];
    this.algovizEngineService.currentInstructionAction = '';
    this.algovizEngineService.currentProcedureName = currentAnimationStep['id'] + currentAnimationStep['args'];
    this.updateCurrentInstructionsCode(
      currentProcedure['procedures'][currentAnimationStep['instructions']]['instructions'],
      currentAnimationStep['instructonActive']);
   }

  updateCurrentInstructionsCode(instructions: object[], currentLine: number) {
    this.algovizEngineService.currentProcedureCode = [];
    let i = 0;
    const max = instructions.length;
    while (i < max) {
      const line = {current: i === currentLine, code: instructions[i]['code'] };
      this.algovizEngineService.currentProcedureCode.push(line);
      i++;
    }
  }

  updateAudio(): void {

  }

  callDialogWindow(): void {
    this.dialogWindowService.msg = this.translate.data['ERROR'];
    this.dialogWindowService.call_showWindow();
  }

  ngOnInit() {
    const self = this;

    const app = {
      timer: null,
      startAnimation: function() {
        if (!self.isAnimationIaActive) {
          self.isAnimationIaActive = true;
        } else {
          return;
        }
        self.isAnimationIaActive = true;
        console.log('animation :: START');
        app.timer = setInterval(function(){
          app.playStep();
          app.checkIfAnimationIsOver();
          self.currentAnimationStep++;
          self.currentKeyFrameNumber++;
        }, self.algovizEngineService.timePeriod);
      },
      stepBack: function(){
        app.stopAnimation();
        console.log('animation :: STEP BACK');
        if (self.currentAnimationStep === 0) {
          return;
        } else {
          self.currentAnimationStep--;
          self.currentKeyFrameNumber--;
          app.playStep();
          return;
        }
      },
      stopAnimation: function() {
        console.log('animation :: STOP');
        if (self.isAnimationIaActive) {
          self.isAnimationIaActive = false;
        } else {
          return;
        }
        clearInterval(app.timer);
      },
      stepForwards: function(){
        app.stopAnimation();
        console.log('animation :: STEP FORWARDS');
        if (self.currentAnimationStep >= (self.algovizEngineService.animation.length - 1)) {
          return;
        }
        self.currentAnimationStep++;
        self.currentKeyFrameNumber++;
        app.playStep();
      },
      checkIfAnimationIsOver: function(){
        if (
          typeof self.algovizEngineService.animation[self.currentAnimationStep] === 'undefined' ||
          (self.algovizEngineService.animation.length - 1) === self.currentAnimationStep
        ) {
          app.stopAnimation();
          self.currentAnimationStep = 0;
          self.currentKeyFrameNumber = 1;
          return;
        }
      },
      // Функція для оновлення аудіофайлу коментарів
      updateAudio: function(sourceUrl) {
       //
        $('audio.audio-comment').empty();
        const $source = $('<source/>');
        $source.attr('src', sourceUrl).appendTo('audio.audio-comment');
        self.algovizEngineService.currentInstructionAudio = sourceUrl;
      },
      updateBST: function(tree: object, bst: object[], levelNumber: string, nodeNumber: string) {
        if (tree === null) {
          return;
        }
        const _BST = bst;
        const level_number = levelNumber + '_0';
        // let node_number = 0;
        console.log(self.algovizEngineService.animation[self.currentAnimationStep]['BST']);
        const audioURL = self.algovizEngineService.animation[self.currentAnimationStep]['commentAudio'];
        self.algovizEngineService.currentInstructionAudio = audioURL;
        if (audioURL !== '') {
          // app.updateAudio(audioURL);
        }
        _BST.push({display: 'block', className: level_number, nodeValue: tree['value']});
        app.updateBST(tree['node_left'], _BST, level_number, '_0');
        app.updateBST(tree['node_right'], _BST, level_number, '_1');
        console.log(_BST);
        self.BST = _BST;
      },
      playStep: function() {
        self.updateAlgoVizView();
         let i = 0;
        const elems = self.algovizEngineService.animation[self.currentAnimationStep]['activeElements'];
        const max = elems.length;
        $('item-list').each(function () {
          $(this).removeClass('active');
        });
        for (i; i < max; i++) {
          $('.' + elems[i])
            .addClass('active');
            // .animate({left: '352px', top: '48px'}, 'slow');
          i++;
        }
        //
        const commands = self.algovizEngineService.animation[self.currentAnimationStep]['commands'];
        if (commands.length > 0 ) {
          if (commands.indexOf('updateBST') !== -1) {
            app.updateBST(self.algovizEngineService.animation[self.currentAnimationStep]['BST'], [], '', '_0');
          }
        }
      }
    };

    $(document).ready(function(){
      $('.start').click(function(){
        app.startAnimation();
      });
      $('.back').click(function(){
        app.stepBack();
      });
      $('.pause').click(function(){
        app.stopAnimation();
      });
      $('.forward').click(function(){
        app.stepForwards();
      });
      $('.stop').click(function(){
        app.stopAnimation();
      });
    });
  }

}
