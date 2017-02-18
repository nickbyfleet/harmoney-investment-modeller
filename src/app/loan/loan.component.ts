import { Component, OnInit } from '@angular/core';
import {LoanService} from "../loan.service";
import {ProjectService} from "../project.service";

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  showNewLoanInput: boolean;
  newLoanName: string;
  newLoanAmount: number;
  newLoanRate: number;

  constructor(public loanService: LoanService,
              public projectService: ProjectService) { }

  ngOnInit() {
  }

  showLoanInput(): void {
    this.showNewLoanInput = !this.showNewLoanInput;
  }

  saveNewLoan(): void {
    this.loanService.addLoan(this.projectService.getCurrentProject().id, this.newLoanName, this.newLoanAmount, this.newLoanRate)
      .then(loan => {
        this.showNewLoanInput = false;
        this.newLoanName = null;
        this.newLoanAmount = null;
        this.newLoanRate = null;
      });
  }

}
