import {Component, Input, OnInit} from '@angular/core';
import {DataModel, InstituteModel} from "../../classes/data.class";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() data!: DataModel;

  constructor() {
  }

  ngOnInit(): void {
  }

  getInstitutes(): InstituteModel[] {
    return this.data?.education?.institutes?.filter(i => i.isVisible !== false) ?? [];
  }
}
