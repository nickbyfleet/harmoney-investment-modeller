import {Injectable} from '@angular/core';
import {Project} from "./project";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Loan} from "./loan";
import {isNumber} from "util";
import {forEach} from "@angular/router/src/utils/collection";

const baseUrl: string = 'http://localhost:3000';

@Injectable()
export class LoanService {

  private loansList: Array<Loan>;

  constructor(private http: Http) {
  }

  getLoansList(): Array<Loan> {
    return this.loansList;
  }

  hasLoans(): boolean {
    return this.loansList && this.loansList.length > 0;
  }

  getLoans(projectId: number): Promise<Loan[]> {
    return this.http
      .get(`${baseUrl}/projects/${projectId}/loans`)
      .toPromise()
      .then(resp => resp.json())
      .then(loans => {
        const list = loans.map(loan => new Loan(
          loan.id,
          loan.name,
          parseFloat(loan.amount),
          parseFloat(loan.rate)
        ));
        this.loansList = list;
        return list;
      });
  }


  addLoan(projectId: number, name: string, amount: number, rate: number): Promise<Loan> {
    return this.http
      .post(`${baseUrl}/loans`, {project_id: projectId, name: name, amount: amount, rate: rate})
      .toPromise()
      .then(resp => resp.json())
      .then(loan => {
        this.loansList.unshift(loan);
        return loan;
      });
  }

  destroyLoan(id: number): Promise<Loan> {
    return this.http
      .delete(`${baseUrl}/loans/${id}`)
      .toPromise()
      .then(resp => resp.json())
      .then(() => {
        this.loansList.splice(this.loansList.map((x) => {
          return x.id;
        }).indexOf(id), 1);
      });
  }

  getTotalAmount(): number {
    if (!this.loansList || this.loansList.length <= 0) return 0;
    let sum: number = 0;
    for (let i = 0; i < this.loansList.length; i++) {
      sum = sum + this.loansList[i].amount;
    }
    return sum;
  }

  getWeightedRate(): number {
    let total: number = this.getTotalAmount();
    let weightedRate = 0;

    for (let i = 0; i < this.loansList.length; i++) {
      let thisLoan = this.loansList[i];
      weightedRate += thisLoan.rate * (thisLoan.amount / total);
    }

    return weightedRate;
  }

  // Get number of months until balance hits target
  getBalanceTarget(monthlyContribution: number, targetBalance: number): Object {
    let currentBalance = this.getTotalAmount();
    let rate = this.getWeightedRate();

    if (targetBalance < currentBalance) {
      return {
        numMonths: 0,
        months: [currentBalance]
      };
    }

    let numMonths = 0;
    let months: Array<number>;
    months.push(currentBalance);

    while (currentBalance < targetBalance) {
      let returns = currentBalance * rate;
      currentBalance += returns + monthlyContribution;
      months.push(currentBalance);
    }

    return {
      numMonths: months.length,
      months: months
    };
  }

  getBalanceAtMonth(monthlyContribution: number, targetDate: Date): Object {
    let currentDate = new Date;
    let currentBalance = this.getTotalAmount();
    let rate = this.getWeightedRate();

    if (targetDate < currentDate) {
      return {
        balance: currentBalance,
        months: [currentBalance]
      };
    }

    let numMonths = this.monthDiff(currentDate, targetDate);
    let months: Array<number>;
    months.push(currentBalance);

    for (let i = 0; i < numMonths; i++) {
      let returns = currentBalance * rate;
      currentBalance += returns + monthlyContribution;
      months.push(currentBalance);
    }

    return {
      balance: currentBalance,
      months: months
    };
  }


  monthDiff(d1, d2): number {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }
}
