import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataModel} from "../classes/data.class";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  public lang: string = "en";
  public data: DataModel | undefined;

  public dataChanged = new EventEmitter<DataModel>();

  constructor(private http: HttpClient) {
  }

  getData(): DataModel | undefined {
    return this.data;
  }

  readData(lang: string): Observable<DataModel> {
    //console.log('reading data for', lang);

    // default data-url
    let name = "cv-en.json";

    // define data-url by language
    if (lang.toLowerCase() == 'en')
      name = "cv-en.json";
    if (lang.toLowerCase() == 'ru' || lang.toLowerCase() == 'ру')
      name = "cv-ru.json";
    if (lang.toLowerCase() == 'de')
      name = "cv-de.json";

    // return data-model
    return this.http.get<DataModel>("assets/data/" + name);
  }

  reloadData(lang: string = "en") {
    this.readData(lang).subscribe(data => {
      this.lang = lang;
      this.data = data;
      this.dataChanged.emit(data);
    });
  }
}
