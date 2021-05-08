import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';
import { ApodDetailsComponent } from './_pages/apod-details/apod-details.component';

@NgModule({
    declarations: [AppComponent, DashboardComponent, ApodDetailsComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
