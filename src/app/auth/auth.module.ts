import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpComponent } from './sign-up/sign-up.component';
import {LoginComponent} from "./login/login.component";
import {SharedModule} from "../shared/shared.module";
import { CardWrapperComponent } from './card-wrapper/card-wrapper.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import {RecaptchaModule} from "ng-recaptcha";


@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent,
    CardWrapperComponent,
    PasswordResetComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RecaptchaModule,
  ]
})
export class AuthModule { }
