import {Component, Input, OnInit} from '@angular/core';
import {CertificationModel, DataModel} from "../../classes/data.class";

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {
  @Input() data!: DataModel;

  constructor() {
  }

  ngOnInit(): void {
  }

  getCertifications(): CertificationModel[] {
    return this.data?.certifications?.filter(c => c.isVisible !== false) ?? [];
  }
}
