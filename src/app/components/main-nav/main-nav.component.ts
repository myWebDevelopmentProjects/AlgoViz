import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchemaParserService } from '../../services/schema-parser.service'

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  constructor(
    private router: Router,
    private schemaParserService: SchemaParserService) { }

  routeBSTBalancing() {
    this.router.navigate(['bst-local-balancing']);
  }

  ngOnInit() {
  }

}
