import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER  } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { SchemaParserService } from './services/schema-parser.service';
import { AlgovizEngineService } from './services/algoviz-engine.service';
import { DialogWindowService } from './services/dialog-window.service';
import { IndexComponent } from './components/index/index.component';
import { AlgoVizPageComponent } from './components/algo-viz-page/algo-viz-page.component';
import { DialogWindowComponent } from './components/dialog-window/dialog-window.component';
import { TranslateService } from './services/translate.service';

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('uk');
}

export function setupShemaFactory(
  service: SchemaParserService): Function {
  return () => service.use();
}

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AlgoVizPageComponent,
    DialogWindowComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SchemaParserService,
    DialogWindowService,
    TranslateService,
    AlgovizEngineService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupShemaFactory,
      deps: [ SchemaParserService ],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    },
    { provide: LOCALE_ID, useValue: 'uk'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
