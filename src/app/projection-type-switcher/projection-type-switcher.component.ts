import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projection-type-switcher',
  templateUrl: './projection-type-switcher.component.html',
  styleUrls: ['./projection-type-switcher.component.css']
})
export class ProjectionTypeSwitcherComponent implements OnInit {

  showSavings: string = 'goal';

  constructor() { }

  ngOnInit() {
  }

}
