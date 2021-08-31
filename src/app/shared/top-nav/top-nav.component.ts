import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {MatDialog, _closeDialogVia} from "@angular/material/dialog";
import {SwitchLocationsComponent} from "../../feature/switch-locations/switch-locations.component";
import {RequestAccessComponent} from "../../feature/request-access/request-access.component";

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  @Output() showDrawer: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() display: boolean = false;
  showDrawerValue: boolean = false;
  displayPopup: boolean = false


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onShowDrawer = () => {
    this.showDrawerValue = !this.showDrawerValue;
    this.showDrawer.emit(this.showDrawerValue);
  }

  showPopup = () => {
    this.displayPopup = false
  }

  openSwitchLocationsDialog() {
    this.dialog.open(SwitchLocationsComponent, {
      panelClass: 'dialog-container-custom'
    })
    this.displayPopup = false
  }

  openRequestAccessDialog() {
    this.dialog.open(RequestAccessComponent, {
      panelClass: 'dialog-container-custom'
    })
    this.displayPopup = false
  }
}
