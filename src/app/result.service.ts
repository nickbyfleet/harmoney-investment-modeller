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
}
