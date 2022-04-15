import {Component, Input, OnInit} from '@angular/core';
import {DataModel} from "../../classes/data.class";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @Input() data!: DataModel;

  constructor(private sanitizer: DomSanitizer) {
  }

  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit(): void {
  }

}
