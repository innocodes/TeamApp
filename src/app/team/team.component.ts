import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  @Input() team: string[] = [];
  @Input() index = 0; 
  currentDate: Date = new Date();

  constructor() {}

  ngOnInit(): void {

  }

  // Pipes are use for transforming data

}
