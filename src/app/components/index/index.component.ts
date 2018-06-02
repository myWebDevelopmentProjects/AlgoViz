import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  routeAlgoVizPage(type: string): void {
    this.router.navigate(['algo-viz-page/' + type]);
  }

  ngOnInit() {
  }

}
