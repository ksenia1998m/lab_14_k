import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { TextMaskModule } from 'angular2-text-mask';

import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { PersonViewComponent } from './person-view/person-view.component';
import { PersonAddComponent } from './person-add/person-add.component';

import { FilterFirstNamePipe } from './shared/pipes/filter-first-name.pipe';
import { FilterLastNamePipe } from './shared/pipes/filter-last-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersonViewComponent,
    PersonAddComponent,
    FilterFirstNamePipe,
    FilterLastNamePipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    TextMaskModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
