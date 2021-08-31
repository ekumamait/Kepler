import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SharedModule} from "../shared/shared.module";
import { FindResultsComponent } from './find-results/find-results.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SwitchLocationsComponent } from './switch-locations/switch-locations.component';
import { ContactHqComponent } from './contact-hq/contact-hq.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { RequestAccessComponent } from './request-access/request-access.component';
import { PhonePipe } from '../phone.pipe';
import { ProfileComponent } from './my-profile/my-profile.component';
import { PreferencesComponent } from './preferences/preferences.component';

@NgModule({
  declarations: [
    DashboardComponent,
    FindResultsComponent,
    SwitchLocationsComponent,
    ContactHqComponent,
    CreateOrderComponent,
    CreatePatientComponent,
    RequestAccessComponent,
    PhonePipe,
    ProfileComponent,
    PreferencesComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FeatureModule { }
