import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { NetworkInformationComponent } from './network-information/network-information.component';
import { PublishAppComponent } from './publish-app/publish-app.component';
import { LimitsComponent } from './limits/limits.component';
import { EntitlementComponent } from './entitlement/entitlement.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationDetailsComponent,
    NetworkInformationComponent,
    PublishAppComponent,
    LimitsComponent,
    EntitlementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
