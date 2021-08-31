import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {SwitchLocationsComponent} from "../../feature/switch-locations/switch-locations.component";
import {RequestAccessComponent} from "../../feature/request-access/request-access.component";
import {ContactHqComponent} from "../../feature/contact-hq/contact-hq.component";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Input() showDrawer: boolean = false;
  @Input() display: boolean = false;
  @Input() displayMenuContainer: boolean = true;
  @Input() activeMenuTitle: string = 'my dashboard';
  hoverName: string = '';
  route: string = '';
  url: string = 'http://www.simplelaboratories.com/the-simple-price/test-information/';


  menu: Array<any> = [
    {
      name: 'dashboard',
      iconLink: 'https://kepler.simplelaboratories.com/images/dashboard-db.png',
      activeIcon: 'https://kepler.simplelaboratories.com/images/dashboard-db-hover.png',
      onItemClick: ()=>this.menuClick('/dashboard'),
      navigationLink: '/dashboard',
      routeLink: '/dashboard'
    },
    {
      name: 'create new order',
      iconLink: 'https://kepler.simplelaboratories.com/images/createneworder-db.png',
      activeIcon: 'https://kepler.simplelaboratories.com/images/createneworder-db-hover.png',
      onItemClick: ()=>this.menuClick('/dashboard/newOrder'),
      routeLink: '/dashboard/newOrder'
    },
    {
      name: 'find results',
      iconLink: 'https://kepler.simplelaboratories.com/images/findresults-db.png',
      activeIcon: 'https://kepler.simplelaboratories.com/images/findresults-db-hover.png',
      onItemClick: ()=>this.menuClick('/dashboard/findResults'),
      routeLink: '/dashboard/findResults'
    },
    {
      name: 'switch locations',
      iconLink: 'https://kepler.simplelaboratories.com/images/switchusers-db.png',
      activeIcon: 'https://kepler.simplelaboratories.com/images/switchusers-db-hover.png',
      onItemClick: ()=>this.openSwitchLocationsDialog(),
      routeLink: ''
    },
    {
      name: 'test search',
      iconLink: 'https://kepler.simplelaboratories.com/images/simpleprice-db.png',
      activeIcon: 'https://kepler.simplelaboratories.com/images/simpleprice-db-hover.png',
      onItemClick: () => this.openTestSearch(),
      routeLink: ''
    },
    {
      name: 'my preferences',
      iconLink: 'https://kepler.simplelaboratories.com/images/mypreferences-db.png',
      activeIcon: 'https://kepler.simplelaboratories.com/images/mypreferences-db-hover.png',
      onItemClick: ()=>this.menuClick('/dashboard'),
      routeLink: ''
    },
    {
      name: 'contact hq',
      iconLink: 'https://kepler.simplelaboratories.com/images/contacthq-db.png',
      activeIcon: 'https://kepler.simplelaboratories.com/images/contacthq-db-hover.png',
      onItemClick: ()=>this.openContactHqDialog(),
      routeLink: ''
    },
  ]

  stepperSteps: Array<any> = [
    {
      name: 'home',
      icon: 'home',
      finishedOrCurrent: true,
      onItemClick: ()=>this.menuClick('/dashboard'),
    },
    {
      name: 'select patient',
      icon: 'check',
      finishedOrCurrent: true,
      onItemClick: null
    },
    {
      name: 'select ordering provider',
      icon: 'check',
      finishedOrCurrent: false,
      onItemClick: null
    },
    {
      name: 'enter diagnosis',
      icon: 'check',
      finishedOrCurrent: false,
      onItemClick: null
    },
    {
      name: 'enter tests',
      icon: 'check',
      finishedOrCurrent: false,
      onItemClick: null
    },
    {
      name: 'payment information',
      icon: 'check',
      finishedOrCurrent: false,
      onItemClick: null
    },
    {
      name: 'collection information',
      icon: 'check',
      finishedOrCurrent: false,
      onItemClick: null
    },
    {
      name: 'confirm + submit',
      icon: 'check',
      finishedOrCurrent: false,
      onItemClick: null
    },
  ]

  menuDashboardTitles: any = {
    dashboard: 'my dashboard',
    'create new order': 'create new order',
    'find results': 'find results',
    'switch locations': 'switch locations',
    'my preferences': 'my preferences',
    'contact hq': 'contact hq',
    'add new quick link': 'add new quick link'
  }

  constructor(public router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openSwitchLocationsDialog() {
    this.dialog.open(SwitchLocationsComponent, {
      panelClass: 'dialog-container-custom'
    })
  }

  openContactHqDialog() {
    this.dialog.open(ContactHqComponent, {
      panelClass: 'dialog-container-custom'
    })
  }

  openRequestAccessDialog() {
    this.dialog.open(RequestAccessComponent, {
      panelClass: 'dialog-container-custom'
    })
  }

  menuClick(route: string) {
    this.router.navigate([route]).then(()=>{})
  }

  openTestSearch () {
    window.open(this.url, '_blank');
  }

  goToPage(url: string) {
    window.open(url);
  }

  activateHover(name: string) {
    this.hoverName = name;
  }

  deactivateHover() {
    this.hoverName = '';
  }

}
