import { Component, OnInit } from '@angular/core';
import {LoanService} from "../loan.service";
import {ResultService} from "../result.service";
import {Result} from "../result";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public resultMessage:string;
  public numMonths: number;
  public lineChartData:Array<any>;

  public lineChartLabels:Array<any>;
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  constructor(
    public loanService: LoanService,
    public resultService: ResultService
  ) {
    this.resultMessage = '';
    this.numMonths = 0;
    this.lineChartData = new Array();
    this.lineChartLabels = new Array();
  }

  ngOnInit() {
    let result: Result = this.resultService.getResult();
    let balances: Array<number>;
    let data:any;

    switch (result.scenarioType) {
      case 'savings_goal':
        data = this.loanService.getBalanceTarget(result.monthlyContribution, result.targetAmount);
        this.numMonths = data.numMonths;
        balances = data.months;
        this.resultMessage = `You will reach your goal in ${this.numMonths} months.`;
        break;

      case 'savings_projection':
        console.log("Doing a savings projection");
        data = this.loanService.getBalanceAtMonth(result.monthlyContribution, result.targetDate);
        this.numMonths = data.numMonths;
        balances = data.months;

        if (balances.length > 0) {
          let finalBalance = balances[balances.length - 1];
          this.resultMessage = `Your balance will be $${finalBalance} in ${this.numMonths} months time.`;
        }
        break;
    }

    console.log(balances);

    this.lineChartLabels = this.resultService.getMonthLabels(this.numMonths);

    this.lineChartData.push({
      data: balances,
      label: 'Your Portfolio'
    });

    let harmoney: any = this.loanService.getBalanceInXMonthsByRate(result.monthlyContribution, 12.99, this.numMonths);
    this.lineChartData.push({
      data: harmoney.months,
      label: 'Harmoney Portfolio'
    });

    let market: any = this.loanService.getBalanceInXMonthsByRate(result.monthlyContribution, 3.36, this.numMonths);
    this.lineChartData.push({
      data: market.months,
      label: 'Market Portfolio'
    });
  }
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
