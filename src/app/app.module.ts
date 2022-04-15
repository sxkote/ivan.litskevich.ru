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
import { MarkdownComponent } from './components/markdown/markdown.component';
import {MarkdownModule} from "ngx-markdown";
import { AvatarComponent } from './components/avatar/avatar.component';
import { CertificationComponent } from './components/certification/certification.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { EducationComponent } from './components/education/education.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SkillsComponent,
    SkillBarListComponent,
    NavbarComponent,
    ExperienceComponent,
    MarkdownComponent,
    AvatarComponent,
    CertificationComponent,
    CertificateComponent,
    EducationComponent,
    CoursesComponent,
    ContactsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
