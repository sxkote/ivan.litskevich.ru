import {Component, Input, OnInit} from '@angular/core';
import {CertificateModel} from "../../classes/data.class";

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
  @Input() certificate: CertificateModel | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
