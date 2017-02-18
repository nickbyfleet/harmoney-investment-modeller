import { Component, OnInit, Input } from '@angular/core';
import {Project} from "../project";
import {ProjectService} from "../project.service";
import {LoanService} from "../loan.service";

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  @Input() project: Project;

  constructor(public projectService: ProjectService,
              public loanService: LoanService) { }

  ngOnInit() {
  }

  destroyProject(): void {
    this.projectService.destroyProject(this.project.id);
  }

  setCurrentProject(): void {
    this.projectService.setCurrentProject(this.project);
    this.reloadLoanList();
  }

  reloadLoanList(): void {
    this.loanService.getLoans(this.projectService.getCurrentProject().id);
  }
}
