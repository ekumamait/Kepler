import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css', '../login/login.component.css']
})
export class PasswordResetComponent implements OnInit {

  cardTitle: string = "Reset my password";
  buttonLabel: string = 'Reset my password';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate = (route: string) => {
    this.router.navigate([route])
  }

}
