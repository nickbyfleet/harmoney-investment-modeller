import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoanComponent } from './loan/loan.component';
import { ProjectComponent } from './project/project.component';

import { ProjectListComponent } from './project-list/project-list.component';
import { LoanListComponent } from './loan-list/loan-list.component';
import { ProjectionTypeSwitcherComponent } from './projection-type-switcher/projection-type-switcher.component';
import { ProjectItemComponent } from './project-item/project-item.component'
import {ProjectService} from "./project.service";

@NgModule({
  declarations: [
    AppComponent,
    LoanComponent,
    ProjectComponent,
    ProjectListComponent,
    LoanListComponent,
    ProjectionTypeSwitcherComponent,
    ProjectItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
