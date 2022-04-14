import {Component, Input, OnInit} from '@angular/core';
import {SkillModel} from "../../classes/data.class";

@Component({
  selector: 'app-skill-bar-list',
  templateUrl: './skill-bar-list.component.html',
  styleUrls: ['./skill-bar-list.component.css']
})
export class SkillBarListComponent implements OnInit {
  @Input() skills: SkillModel[] = [];
  @Input() color: string = "#2A9FD6";
  @Input() category: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  getSkills(): SkillModel[] {
    return this.skills.filter(s => !this.category || this.category.toLowerCase() == s.category.toLowerCase());
  }
}
