import { Component, OnInit, Input } from '@angular/core';
import {Project} from "../project";
import {ProjectService} from "../project.service";

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  @Input() project: Project;

  constructor(public projectService: ProjectService) { }

  ngOnInit() {
  }

  destroyProject(): void {
    this.projectService.destroyProject(this.project.id);
  }

}
