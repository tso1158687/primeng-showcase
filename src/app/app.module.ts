import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PagesComponent } from './pages/pages.component';
import { TableComponent } from './table/table.component';
import {ProgressBarModule} from 'primeng/progressbar';
import { HttpClientModule } from '@angular/common/http';
import {SliderModule} from 'primeng/slider';
import { ChipModule } from 'primeng/chip';
@NgModule({
  declarations: [AppComponent, HeaderComponent, SidebarComponent, PagesComponent,TableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckboxModule,
    FormsModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    BrowserAnimationsModule,
    InputTextModule,
    CalendarModule,
    ProgressBarModule,
    HttpClientModule,
    SliderModule,
    ChipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
