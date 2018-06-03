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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialogWindowService: DialogWindowService,
    private translate: TranslateService,
    private schema: SchemaParserService
  ) {
      console.log('translate', translate.data);
      console.log('schema ', schema.data['schema']);
  }

  routeIndex(): void {
    this.router.navigate(['/']);
  }

  callDialogWindow(): void {
    this.dialogWindowService.msg = this.translate.data['ERROR'];
    this.dialogWindowService.call_showWindow();
  }

  ngOnInit() {
    this.typeOfAnimation = this.route.snapshot.paramMap.get('type');
  }

}
