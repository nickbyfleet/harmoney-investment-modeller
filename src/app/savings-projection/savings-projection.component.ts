import {Component, OnInit} from '@angular/core';
import {ResultService} from "../result.service";
import {Result} from "../result";

@Component({
  selector: 'app-savings-projection',
  templateUrl: './savings-projection.component.html',
  styleUrls: ['./savings-projection.component.css']
})
export class SavingsProjectionComponent implements OnInit {

  result: Result;

  constructor(public resultService: ResultService) {
    this.result = new Result(null, null, null, 'savings_projection');
  }

  ngOnInit() {
  }

  submit(): void {
    this.resultService.setResult(this.result);
  }

}
