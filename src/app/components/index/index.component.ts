import { Component, OnInit } from '@angular/core';
import { LocalizationService } from '../../services/localization.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    localization: LocalizationService
  ) { }

  ngOnInit() {
  }

}
