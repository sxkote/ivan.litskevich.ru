import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataModel} from "../classes/data.class";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor(private http: HttpClient) {
  }

  readData(lang: string): Observable<DataModel> {
    // default data-url
    let url = "assets/cv-en.json";

    // define data-url by language
    if (lang.toLowerCase() == 'en')
      url = "assets/cv-en.json";
    if (lang.toLowerCase() == 'ru' || lang.toLowerCase() == 'ру')
      url = "assets/cv-ru.json";
    if (lang.toLowerCase() == 'de')
      url = "assets/cv-de.json";

    // return data-model
    return this.http.get<DataModel>(url);
  }
}
