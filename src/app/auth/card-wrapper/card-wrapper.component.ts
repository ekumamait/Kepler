import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.css']
})
export class CardWrapperComponent implements OnInit {

  @Input() cardTitle: string = 'Welcome Back to Kepler';
  @Input() buttonLabel: string = 'Log me in, please';
  @Input() buttonRoute: string = '/home'
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleLoginSignUp = (route: string) => {
    this.router.navigate([route])
  }

}
