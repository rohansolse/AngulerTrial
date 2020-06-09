import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { SmallProjectComponent } from './small-project/small-project.component';
import { NgStyleANDngClassComponent } from './ng-style-andng-class/ng-style-andng-class.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgSwitchAdvComponent } from './ng-switch-adv/ng-switch-adv.component';
import { PipesTemPlateExpressionComponent } from './pipes-tem-plate-expression/pipes-tem-plate-expression.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    SmallProjectComponent,
    NgStyleANDngClassComponent,
    NgifComponent,
    NgForComponent,
    NgSwitchComponent,
    NgSwitchAdvComponent,
    PipesTemPlateExpressionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
