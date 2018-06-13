import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '../../services/translate.service';
import { SchemaParserService } from '../../services/schema-parser.service';
import { AlgovizEngineService } from '../../services/algoviz-engine.service';
import { DialogWindowService } from '../../services/dialog-window.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  content_index_page: string;
  algo_viz_nav: any = [];

  items: number[];

  constructor(
    private router: Router,
    private translate: TranslateService,
    private dialogWindowService: DialogWindowService,
    private algovizEngineService: AlgovizEngineService,
    private schema: SchemaParserService
  ) {

    this.items = algovizEngineService.itemList;
    this.content_index_page = this.translate.data['CONTENT_INDEX_PAGE'];
    this.getAlgoVizNav();

  }

  onKey(event: any, i: number) { // without type info
    const inputNumber = parseInt(event.target.value, 10);
    if (this.algovizEngineService.itemList[i] === inputNumber) {
      event.target.value = this.algovizEngineService.itemList[i];
      this.dialogWindowService.msg = this.translate.data['ERROR_OF_INPUT'];
      this.dialogWindowService.call_showWindow();
      return;
    } else {
      this.algovizEngineService.itemList[i] = event.target.value;
    }
  }

  getAlgoVizNav(): void {
    const alorithms = this.schema.data['schema'];
    for (const item in alorithms) {
      const link_nav = {link: '', name: ''};
      if (alorithms.hasOwnProperty(item)) {
        console.log(alorithms[item]);
        link_nav.link = item;
        if (alorithms[item].hasOwnProperty('name')) {
          console.log(alorithms[item]['name']);
          link_nav.name = alorithms[item]['name'];
        }
      }
      this.algo_viz_nav.push(link_nav);
    }
  }

  routeAlgoVizPage(type: string): void {
    this.router.navigate(['algo-viz-page/' + type]);
  }

  ngOnInit() {
  }

}
