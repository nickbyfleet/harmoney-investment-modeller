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
import { ProjectService } from "./project.service";
import { LoanService } from "./loan.service";
import { LoanItemComponent } from './loan-item/loan-item.component';
import { SavingsGoalComponent } from './savings-goal/savings-goal.component';
import { SavingsProjectionComponent } from './savings-projection/savings-projection.component';
import { ChartsModule } from "ng2-charts";
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanComponent,
    ProjectComponent,
    ProjectListComponent,
    LoanListComponent,
    ProjectionTypeSwitcherComponent,
    ProjectItemComponent,
    LoanItemComponent,
    SavingsGoalComponent,
    SavingsProjectionComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [ProjectService, LoanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
