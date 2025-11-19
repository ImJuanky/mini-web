import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { PlanList } from './components/plan-list/plan-list';
import { PlanCard } from './components/plan-card/plan-card';
import { About } from './about/about';
import { Contact } from './contact/contact';

@NgModule({
  declarations: [
    App,
    Navbar,
    PlanList,
    PlanCard,
    About,
    Contact
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
