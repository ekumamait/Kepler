import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FindResultsComponent} from "./find-results/find-results.component";
import {CreateOrderComponent} from "./create-order/create-order.component";
import { ProfileComponent } from './my-profile/my-profile.component';
import { PreferencesComponent } from './preferences/preferences.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'findResults', component: FindResultsComponent},
  {path: 'newOrder', component: CreateOrderComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'myPreferences', component: PreferencesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
