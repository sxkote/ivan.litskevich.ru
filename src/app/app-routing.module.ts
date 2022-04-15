import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: '**', component: AppComponent},
  // {path: 'ru', component: AppComponent, data: {lang: 'ru'}},
  // {path: 'en', component: AppComponent, data: {lang: 'en'}},
  // {path: '', redirectTo: '/en', pathMatch: 'full'},
  // {path: '**', redirectTo: '/en'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'ignore',
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
