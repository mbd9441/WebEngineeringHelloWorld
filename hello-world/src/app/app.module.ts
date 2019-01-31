import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppComponent1 } from './Pages/app.component1';
import { AppComponent2 } from './Pages/app.component2';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent1,
    AppComponent2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
