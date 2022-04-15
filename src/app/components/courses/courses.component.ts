import {Component, Input, OnInit} from '@angular/core';
import {CourseModel, DataModel} from "../../classes/data.class";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  @Input() data!: DataModel;

  constructor() {
  }

  ngOnInit(): void {
  }

  getCourses(): CourseModel[] {
    return this.data?.education?.courses?.filter(c => c.isVisible !== false) ?? [];
  }
}
