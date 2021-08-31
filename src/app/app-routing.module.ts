import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {PasswordResetComponent} from "./auth/password-reset/password-reset.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: SignUpComponent},
  { path: 'password-reset', component: PasswordResetComponent},
  {
    path: 'dashboard',
    loadChildren: () => import(`./feature/feature.module`).then(
      module => module.FeatureModule
    )
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
