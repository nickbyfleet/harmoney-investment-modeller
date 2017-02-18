import { Injectable } from '@angular/core';
import {Project} from "./project";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

const baseUrl:string = 'http://localhost:3000';

@Injectable()
export class ProjectService {

  private projectsList: Array<Project>;

  constructor(
    private http:Http
  ) { }

  getProjectsList(): Array<Project> {
    return this.projectsList;
  }

  getProjects(): Promise<Project[]> {
    return this.http
      .get(`${baseUrl}/projects.json`)
      .toPromise()
      .then(resp => resp.json())
      .then(projects => {
        const list = projects.map(project => new Project(
          project.id,
          project.name
        ));
        this.projectsList = list;
        return list.reverse();
      });
  }


  addProject(name: string): Promise<Project> {
    return this.http
      .post(`${baseUrl}/projects`, {name: name})
      .toPromise()
      .then(resp => resp.json())
      .then(project => {
        this.projectsList.unshift(project);
        return project;
      });
  }

  destroyProject(id: number): Promise<Project> {
    return this.http
      .delete(`${baseUrl}/projects/${id}`)
      .toPromise()
      .then(resp => resp.json())
      .then(() => {
        this.projectsList.splice(this.projectsList.map((x) => {return x.id; }).indexOf(id), 1);
      });
  }
}
