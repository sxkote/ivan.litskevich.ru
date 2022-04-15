import {Component, OnInit} from '@angular/core';
import {DataProviderService} from "./services/data-provider.service";
import {DataModel} from "./classes/data.class";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public data: DataModel | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataProvider: DataProviderService) {
  }

  async ngOnInit() {
    this.dataProvider.dataChanged.subscribe(data => this.data = data);

    this.dataProvider.reloadData(this.dataProvider.lang);

    // this.router.events.subscribe((data) => {
    //   if (data instanceof RoutesRecognized) {
    //     const lang = data.state.root.firstChild?.data['lang'];
    //     this.dataProvider.reloadData(lang);
    //   }
    // });

    // this.route.params.subscribe(async (params) => {
    //   this.dataProvider.reloadData(params['lang']);
    // });
  }
}
