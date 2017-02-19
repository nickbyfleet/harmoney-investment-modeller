import { Component, OnInit } from '@angular/core';
import {ResultService} from "../result.service";
import {Result} from "../result";

@Component({
  selector: 'app-savings-goal',
  templateUrl: './savings-goal.component.html',
  styleUrls: ['./savings-goal.component.css']
})
export class SavingsGoalComponent implements OnInit {
  result: Result;

  constructor(public resultService: ResultService) {
    this.result = new Result(null, null, null, 'savings_goal');
  }

  ngOnInit() {
  }

  submit(): void {
    this.resultService.setResult(this.result);
  }

}
