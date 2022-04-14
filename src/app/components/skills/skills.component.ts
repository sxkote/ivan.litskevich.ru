import {Component, Input, OnInit} from '@angular/core';
import {DataModel} from "../../classes/data.class";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input() data: DataModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
