import {Component, OnInit} from '@angular/core';
import {DataProviderService} from "./services/data-provider.service";
import {DataModel} from "./classes/data.class";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public data: DataModel = new DataModel();

  constructor(private dataProvider: DataProviderService) {
  }

  async ngOnInit() {
    this.dataProvider.readData("en")
      .subscribe(data => {
        this.data = data;
        console.log(this.data);
      });
  }
}
