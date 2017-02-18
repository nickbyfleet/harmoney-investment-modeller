import { Component, OnInit } from '@angular/core';

import {ProjectService} from "../project.service";
import {Project} from "../project";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  newProjectName: string;
  showNewProjectInput: boolean;

  constructor(public projectService: ProjectService) { }

  ngOnInit() {
  }

  showProjectInput(): void {
    this.showNewProjectInput = !this.showNewProjectInput;
  }

  saveNewProject(): void {
    this.projectService.addProject(this.newProjectName)
      .then(project => {
        this.showNewProjectInput = false;
        this.newProjectName = null;
      });
  }
}
