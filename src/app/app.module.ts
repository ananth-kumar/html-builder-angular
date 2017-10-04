import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

import { AppRoute } from './route/app-route';

import { CloudService } from './services/cloud.service';
import { GridsterModule } from 'angular-gridster2';
import { BuilderComponent } from './pages/builder/builder.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BuilderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoute,
    GridsterModule
  ],
  providers: [CloudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
