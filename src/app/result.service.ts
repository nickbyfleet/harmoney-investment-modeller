import {Injectable} from '@angular/core';
import {Result} from "./result";

@Injectable()
export class ResultService {

  result: Result;

  setResult(result: Result) {
    this.result = result;
  }

  getResult(): Result {
    return this.result;
  }

  destroyResult(): void {
    this.result = null;
  }

  showResult(): boolean {
    return this.result != null;
  }

  getMonthLabels(numMonths: number): Array<string> {

    let currentDate = new Date();

    let monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

    let labels = new Array();
    let index = (currentDate.getMonth() - 1) % 11;

    for(let i = 0; i < numMonths; i++) {
      labels.push(monthNames[index]);
      index = (index + 1) % 11;
    }

    return labels;
  }

}
