import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '../../services/translate.service';
import { SchemaParserService } from '../../services/schema-parser.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  content_index_page: string;
  algo_viz_nav: any = [];

  constructor(
    private router: Router,
    private translate: TranslateService,
    private schema: SchemaParserService
  ) {
    this.content_index_page = this.translate.data['CONTENT_INDEX_PAGE'];
    this.getAlgoVizNav();

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
