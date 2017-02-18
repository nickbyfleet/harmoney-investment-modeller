import { Component, OnInit, Input } from '@angular/core';
import {LoanService} from "../loan.service";
import {Loan} from "../loan";

@Component({
  selector: 'app-loan-item',
  templateUrl: './loan-item.component.html',
  styleUrls: ['./loan-item.component.css']
})
export class LoanItemComponent implements OnInit {

  @Input() loan: Loan;

  constructor(public loanService: LoanService) { }

  ngOnInit() {
  }

  destroyLoan(): void {
    this.loanService.destroyLoan(this.loan.id);
  }

}
