import {Component, Input, OnInit} from '@angular/core';
import {DataModel} from "../../classes/data.class";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() data: DataModel | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
