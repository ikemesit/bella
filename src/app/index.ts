import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, RootComponent } from './routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TechsModule } from './techs';

import { MainComponent } from './main';
import { HeaderComponent } from './header';
import { TitleComponent } from './title';
import { FooterComponent } from './footer';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    NgbModule.forRoot(),
    TechsModule
  ],
  declarations: [
    RootComponent,
    MainComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
