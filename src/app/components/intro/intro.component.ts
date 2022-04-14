import {Component, Input, OnInit} from '@angular/core';
import {DataModel} from "../../classes/data.class";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  @Input() data: DataModel | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  getTitlesList(): string {
    if (!this.data)
      return "";

    const result = "[" + this.data.info.titles.map(t => '"' + t + '"').join(",") + "]";
    console.log(result);
    return result;
  }
}
