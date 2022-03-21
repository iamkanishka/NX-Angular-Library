import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TodosShareModule} from '@nx-ng-lib/todos-share'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,TodosShareModule],

  bootstrap: [AppComponent],
})
export class AppModule {}
