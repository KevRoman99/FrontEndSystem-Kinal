import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PeopleComponent } from './Components/people/people.component';
import { Person } from './models/person';

//Services
import { PersonServiceService } from './services/person-service.service';

//Connection
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CareersComponent } from './components/careers/careers.component';
import { CoursesComponent } from './components/courses/courses.component';
import { FamilyComponent } from './components/family/family.component';
import { UnitsComponent } from './components/units/units.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PeopleComponent,
    CareersComponent,
    CoursesComponent,
    FamilyComponent,
    UnitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PersonServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
