import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogWindowService } from '../../services/dialog-window.service';
import { TranslateService } from '../../services/translate.service';
import { SchemaParserService } from '../../services/schema-parser.service';

@Component({
  selector: 'app-algo-viz-page',
  templateUrl: './algo-viz-page.component.html',
  styleUrls: ['./algo-viz-page.component.scss']
})
export class AlgoVizPageComponent implements OnInit {

  typeOfAnimation: string;
  currentProceduerName: string;
  currentProceduerCode: any[] = [];
  proceduersList: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialogWindowService: DialogWindowService,
    private translate: TranslateService,
    private schema: SchemaParserService
  ) {
      console.log('translate', translate.data);
      console.log('schema ', schema.data['schema']);
      this.typeOfAnimation = this.route.snapshot.paramMap.get('type');
      this.currentProceduerName = 'Default';
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
      this.proceduersList.push(line);
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
        this.currentProceduerName = procedure.id + procedure.args;
        this.updateCurrentInstructionsCode(procedure.instructions);
      }
      i++;
      break;
    }
   }

  updateCurrentInstructionsCode(instructions: object[]) {
    let i = 0;
    const max = instructions.length;
    while (i < max) {
      const line = {current: i === 0 ? true : false, code: instructions[i]['code'] };
      this.currentProceduerCode.push(line);
      i++;
    }
  }

  callDialogWindow(): void {
    this.dialogWindowService.msg = this.translate.data['ERROR'];
    this.dialogWindowService.call_showWindow();
  }

  ngOnInit() {
    this.typeOfAnimation = this.route.snapshot.paramMap.get('type');
  }

}
