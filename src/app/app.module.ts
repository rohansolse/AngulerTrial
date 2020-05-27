import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { SmallProjectComponent } from './small-project/small-project.component';
import { NgStyleANDngClassComponent } from './ng-style-andng-class/ng-style-andng-class.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    SmallProjectComponent,
    NgStyleANDngClassComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
