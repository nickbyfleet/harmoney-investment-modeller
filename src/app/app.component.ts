import {Component} from '@angular/core';
import {ProjectService} from "./project.service";
import {LoanService} from "./loan.service";
import {ResultService} from "./result.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public projectService: ProjectService,
              public loanService: LoanService,
              public resultService: ResultService) {
  }
}
