import { Component, OnInit } from '@angular/core';
import {LoanService} from "../loan.service";
import {ProjectService} from "../project.service";

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {

  constructor(public loanService: LoanService,
              public projectService: ProjectService) { }

  ngOnInit() {

  }
}
