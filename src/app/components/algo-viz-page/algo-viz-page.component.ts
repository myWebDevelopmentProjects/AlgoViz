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
  currentAnimationStep: number;
  currentKeyFrameNumber: number;
  algovizEngineService: AlgovizEngineService;
  // блокування зайвих натсикувань на кнопку СТАРТ
  isAnimationIaActive: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialogWindowService: DialogWindowService,
    private translate: TranslateService,
    private schema: SchemaParserService
  ) {
      this.isAnimationIaActive = false;
      this.currentAnimationStep = 0;
      // для відображення крок анімації починається з одиниці
      this.currentKeyFrameNumber = 1;
      this.algovizEngineService = new AlgovizEngineService();
      this.bstNonBalancingAdd = new BstNonBalancingAdd(this.algovizEngineService, this.translate, this.schema);
      console.log('schema ', schema.data['schema']);
      this.typeOfAnimation = this.route.snapshot.paramMap.get('type');
      this.updateAlgoVizView();
  }

  routeIndex(): void {
    this.router.navigate(['/']);
  }

  updateProceduresList(procedures: object[], id: string): void {
    console.log('procedures', procedures);
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
    const currentProcedure = this.schema.data['schema'][this.typeOfAnimation];
    const currentAnimationStep = this.algovizEngineService.animation[this.currentAnimationStep];
    const max = currentProcedure['procedures'].length;
    //
    this.updateProceduresList(currentProcedure['procedures'], this.algovizEngineService.animation[this.currentAnimationStep]['id']);
    //
    console.log(this.algovizEngineService.animation[this.currentAnimationStep]);

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
      playStep: function() {
        self.updateAlgoVizView();
        console.log(self.algovizEngineService.animation[self.currentAnimationStep]['BST']);
        let i = 0;
        const elems = self.algovizEngineService.animation[self.currentAnimationStep]['activeElements'];
        const max = elems.length;
        $('item-list').each(function () {
          $(this).removeClass('active');
        });
        for (i; i < max; i++) {
          $('.' + elems[i].toString())
            .addClass('active')
            .animate({left: '352px', top: '48px'}, 'slow');
          ;
          i++;
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
