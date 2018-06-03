import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  content_index_page: string;

  constructor(
    private router: Router,
    private translate: TranslateService
  ) {
    this.content_index_page = this.translate.data['CONTENT_INDEX_PAGE'];
  }

  routeAlgoVizPage(type: string): void {
    this.router.navigate(['algo-viz-page/' + type]);
  }

  ngOnInit() {
  }

}
