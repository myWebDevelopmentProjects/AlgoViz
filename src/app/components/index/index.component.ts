import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalizationService } from '../../services/localization.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private router: Router,
    localization: LocalizationService
  ) { }

  routeAlgoVizPage(type: string): void {
    this.router.navigate(['algo-viz-page/' + type]);
  }

  ngOnInit() {
  }

}
