import {Component, Input, OnInit} from '@angular/core';
import {DataModel} from "../../classes/data.class";
import {DataProviderService} from "../../services/data-provider.service";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() data: DataModel | undefined;

  constructor(private viewportScroller: ViewportScroller,
              private dataProvider: DataProviderService) {
  }

  ngOnInit(): void {
  }

  getLanguage() {
    return this.dataProvider.lang;
  }

  scrollToAnchor(elementID: string) {
    this.viewportScroller.scrollToAnchor(elementID);
  }

  switchLanguage(lang: string) {
    this.dataProvider.reloadData(lang);
  }
}
