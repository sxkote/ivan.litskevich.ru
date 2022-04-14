import {Component, Input, OnInit} from '@angular/core';
import {DataModel} from "../../classes/data.class";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() data: DataModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
