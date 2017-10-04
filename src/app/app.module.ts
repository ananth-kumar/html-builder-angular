import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

import { AppRoute } from './route/app-route';

import { CloudService } from './services/cloud.service';
import { GridsterModule } from 'angular-gridster2';
import { BuilderComponent } from './pages/builder/builder.component';
import { TextboxComponent } from './lib/tools/textbox/textbox.component';
import { CommonComponent } from './lib/tools/common/common.component';
import { ContainerComponent } from './lib/tools/container/container.component';
import { ToolsetComponent } from './pages/builder/toolset/toolset.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PropertiespaneComponent } from './pages/builder/propertiespane/propertiespane.component';
import { CanvasComponent } from './pages/builder/canvas/canvas.component';
import {DndModule} from 'ng2-dnd';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BuilderComponent,
    TextboxComponent,
    CommonComponent,
    ContainerComponent,
    ToolsetComponent,
    PropertiespaneComponent,
    CanvasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoute,
    GridsterModule,
    NgbModule.forRoot(),
    DndModule.forRoot()
  ],
  providers: [CloudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
