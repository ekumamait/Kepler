import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  showDrawer: boolean = false;
  @Input() display: boolean = false;
  @Input() activeMenuTitle: string = 'my dashboard';
  @Input() displayMenuContainer: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onShowDrawer = (value: boolean) => {
    this.showDrawer = value
  }

}
