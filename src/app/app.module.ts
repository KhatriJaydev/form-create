import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { NetworkInformationComponent } from './network-information/network-information.component';
import { PublishAppComponent } from './publish-app/publish-app.component';
import { LimitsComponent } from './limits/limits.component';
import { EntitlementComponent } from './entitlement/entitlement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAppVersionComponent } from './create-app-version/create-app-version.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationDetailsComponent,
    NetworkInformationComponent,
    PublishAppComponent,
    LimitsComponent,
    EntitlementComponent,
    CreateAppVersionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
