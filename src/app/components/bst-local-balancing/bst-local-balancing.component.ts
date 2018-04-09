import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bst-local-balancing',
  templateUrl: './bst-local-balancing.component.html',
  styleUrls: ['./bst-local-balancing.component.scss']
})
export class BstLocalBalancingComponent implements OnInit {

  BST_MAX_START_ITEMS = 20;
  BST_MAX_ITEMS = 30;
  state: any[] = [];

  playingMode = 'nonstop';
  itemsStart = [];
  bstItems: any = [];

  constructor(
    private router: Router) {
    let i = 0;
    while (i <= this.BST_MAX_START_ITEMS) {
      const item = { display: 'inline-block', id: i, value: '' + i };
      this.itemsStart.push(item);
      i++;
    }
    i = 0;
    while (i <= this.BST_MAX_ITEMS) {
      const item = { display: 'none', id: i, value: '-' };
      this.bstItems.push(item);
      i++;
    }
  }

  ngOnInit() {
  }

  /**
   *
   * @constructor
   */
  AddElement() {
    console.log('Start add element');
    let i = 0;
    const max = this.itemsStart.length;
    while (i <= max) {
      if (this.itemsStart[i].display === 'inline-block') {
        console.log('add', i);
        this.itemsStart[i].display = 'none';
        this.bstItems[i].display = 'block';
        this.bstItems[i].value = this.itemsStart[i].value;
        break;
      }
      i++;
    }
  }

  RemoveElement() {
    console.log('Start remove element');
    let i = 0;
    const max = this.itemsStart.length;
    while (i <= max) {
      if (this.itemsStart[i].display === 'inline-block') {
        console.log('add', i);
        this.itemsStart[i].display = 'none';
        this.bstItems[i].display = 'block';
        this.bstItems[i].value = this.itemsStart[i].value;
        break;
      }
      i++;
    }
  }

  BalanceRandom() {
    console.log('Start BalanceRandom');
  }

  BalanceAmortization() {
    console.log('Start BalanceAmortization');
  }

  BalanceOptimization() {
    console.log('Start BalanceOptimization');
  }

  PlayNonStop() {
    console.log('Start PlayNonStop');
  }

  PlayStepByStep() {
    console.log('Start PlayStepByStep');
  }

  GetInfo() {
    console.log('Start GetInfo');
  }

  RouteStart() {
    this.router.navigate(['start']);
  }
}
