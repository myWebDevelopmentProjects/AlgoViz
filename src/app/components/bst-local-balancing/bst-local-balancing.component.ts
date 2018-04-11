import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-bst-local-balancing',
  templateUrl: './bst-local-balancing.component.html',
  styleUrls: ['./bst-local-balancing.component.scss']
})
export class BstLocalBalancingComponent implements OnInit {

  @ViewChild('codePart', {read: ElementRef}) codePart: ElementRef;

  BST_MAX_START_ITEMS = 20;
  BST_MAX_ITEMS = 30;
  state: any[] = [];

  currentElement = '№0';
  lastAddedElement = '';
  pseudoCodeContainer = [];

  modalWindowShow = 'none';

  BalanceRandomMethod = {
    active: false
  };

  BalanceAmortizationMethod = {
    active: false
  };

  BalanceOptimizationMethod = {
    active: false
  };



  playingMode = 'nonstop';
  itemsStart = [];
  bstItems: any = [];

  constructor(
    private router: Router,
) {
    let i = 0;
    while (i <= this.BST_MAX_START_ITEMS) {
      const item = { display: 'inline-block', id: i, value: '' + i };
      this.itemsStart.push(item);
      i++;
    }
    i = 0;
    while (i <= this.BST_MAX_ITEMS) {
      const item = { display: 'none', id: i, value: '-' , beforeDisplay: 'none'};
      this.bstItems.push(item);
      i++;
    }
  }

  getPseudocode(url: string) {
    // const headers = new Headers();
   //  headers.append('Accept', 'application/xml');
/*
    return this.http.get(url, {
      // headers: headers
    }).map(res => console.log(res));
*/
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
        let add = i;
        add++;
        this.itemsStart[i].display = 'none';
        this.bstItems[i].display = 'block';
        this.bstItems[i].value = this.itemsStart[i].value;
        if (add <= this.BST_MAX_START_ITEMS) {
          this.currentElement = '№' + add;
          this.lastAddedElement = '№' + i;
        } else {
          this.currentElement = '';
          this.lastAddedElement = '№' + this.BST_MAX_START_ITEMS;
        }
        break;
      }
      i++;
      this.codePart.nativeElement.scrollTop = -20;
    }
  }

  RemoveElement() {
    if (this.lastAddedElement === '') {
      return;
    }
    console.log('Start remove element', );
    this.modalWindowShow = 'block';
    let i = parseInt(this.lastAddedElement.substr(1, 2), 10);
    const max = this.BST_MAX_START_ITEMS;
    this.itemsStart[i].display = 'inline-block';
    this.bstItems[i].display = 'none';
    let last = i--;
    if (last < 0) {
      this.currentElement = '№0';
      this.lastAddedElement = '';
    } else {
      this.currentElement = '№' + last;
      i === -1 ? this.lastAddedElement = '' : this.lastAddedElement = '№' + i;
    }
  }

  BalanceRandom() {
    this.modalWindowShow = 'none';
    console.log('Start BalanceRandom');
    this.BalanceRandomMethod.active = true;
    this.BalanceAmortizationMethod.active = false;
    this.BalanceOptimizationMethod.active = false;
  }

  BalanceAmortization() {
    this.modalWindowShow = 'none';
    console.log('Start BalanceAmortization');
    this.BalanceRandomMethod.active = false;
    this.BalanceAmortizationMethod.active = true;
    this.BalanceOptimizationMethod.active = false;
  }

  BalanceOptimization() {
    console.log('Start BalanceOptimization');
    this.modalWindowShow = 'none';
    this.BalanceRandomMethod.active = false;
    this.BalanceAmortizationMethod.active = false;
    this.BalanceOptimizationMethod.active = true;
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
