import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroComponent } from './hero.component';
import  { Nav710Component } from './et710nav.component';

import {
  AccordionModule,
  AlertModule,        // Foundation Callouts
  ButtonsModule,
  CarouselModule,     // Foundation Orbit
  CollapseModule,
  BsDatepickerModule,
  BsDropdownModule,   // Foundation Dropdown Menus and Dropdown Panes
  ModalModule,        // Foundation Reveal
  OffcanvasModule,
  PaginationModule,
  ProgressbarModule,
  RatingModule,
  SortableModule,
  TabsModule,
  TimepickerModule,
  TooltipModule,
  TypeaheadModule,
} from 'ngx-foundation';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AlertModule.forRoot(), OffcanvasModule.forRoot(), ButtonsModule.forRoot(), AppRoutingModule ], 

  declarations: [ AppComponent, HelloComponent, HeroComponent, Nav710Component ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
