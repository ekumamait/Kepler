import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        display: 'block'
      })),
      state('closed', style({
        display: 'none'
      })),
      transition('open => closed', [
        animate('10ms')
      ]),
      transition('closed => open', [
        animate('10ms')
      ]),
    ])
  ]
})
export class FooterNavComponent implements OnInit {

  animationStatus: string = 'closed';
  constructor() { }

  ngOnInit(): void {
  }

  toggleFooterContentDisplay = (status: string) => {
    this.animationStatus = status;
  }

}
