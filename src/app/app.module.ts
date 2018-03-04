import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BstLocalBalancingComponent } from './components/bst-local-balancing/bst-local-balancing.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    BstLocalBalancingComponent,
    MainNavComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
