import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { RecaptchaErrorParameters } from "ng-recaptcha";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css', '../login/login.component.css']
})
export class SignUpComponent implements OnInit {

  cardTitle: string = "Let's get started!";
  buttonLabel: string = 'Register';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate = (route: string) => {
    this.router.navigate([route])
  }

  public resolved(captchaResponse: string): void {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  public onError(errorDetails: []): void {
    console.log(`reCAPTCHA error encountered; details:`, errorDetails);
  }

}
