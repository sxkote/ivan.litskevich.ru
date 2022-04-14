import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {IntroComponent} from './components/intro/intro.component';
import {SkillsComponent} from './components/skills/skills.component';
import {SkillBarListComponent} from './components/skill-bar-list/skill-bar-list.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { ExperienceComponent } from './components/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SkillsComponent,
    SkillBarListComponent,
    NavbarComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
