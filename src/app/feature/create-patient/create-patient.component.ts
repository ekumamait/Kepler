import { Component, OnInit } from '@angular/core';
import {states, locationsData, insuranceCompanyData, providersData, preferredDiagnostics} from "../../../assets/data-server/released-data";
@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  selectedValue: string = '';
  firstName: string = '';
  middleName: string = '';
  lastName: string = '';
  dob: string = '';
  alternativeID: string = '';
  address: string = '';
  aptUnit: string = '';
  city: string = '';
  zip: string = '';
  phone: string = '';
  email: string = '';
  primaryInsurance: string = '';
  memberId: string = '';
  groupId: string = '';
  secondaryInsurance: string = '';
  displaySection: string = 'New Patient Profile';
  selectedState: string = '';
  selectedRelation: string = '';
  states: Array<string> = [];
  step: string = '';
  noInsurance: boolean = false;
  locations = locationsData;
  insurances = insuranceCompanyData;
  providers = providersData;
  diagnosticsList = preferredDiagnostics;
  showAddLink: boolean = true;
  showAddLinkDiagnostics: boolean = true;
  menu: Array<any> = [
    {
      name: 'New Patient Profile',
      icon: '../../../assets/img/user-profile.png',
      activeIcon: '../../../assets/img/user-profile-hover.png',
      active: true,
    },
    {
      name: 'Contact Info',
      icon: '../../../assets/img/contact-profile.png',
      activeIcon: '../../../assets/img/contact-profile-hover.png',
      active: false
    },
    {
      name: 'Guarantor/Insurance Info',
      icon: '../../../assets/img/icon-billing-normal.png',
      activeIcon: '../../../assets/img/icon-billing-active.png',
      active: false
    },
    {
      name: 'Confirm + Submit',
      icon: '../../../assets/img/icon-confirm-normal.png',
      activeIcon: '../../../assets/img/icon-confirm-active.png',
      active: false
    }
  ]

  gender: Array<any> = [
    {value: 'MALE', viewValue: 'Male'},
    {value: 'FEMALE', viewValue: 'Female'},
    {value: 'OTHER', viewValue: 'Other'}
  ];

  relationArray: Array<string> = ['Self', 'Spouse', 'Parent/Guardian', 'Other']

  constructor() { }

  ngOnInit(): void {
    this.states = states;
  }

  changeDisplaySection = (section: string) => {
    this.displaySection = section;
    this.menu.forEach(item => {
      item.active = item.name === section;
    })
  }

  handleNextStep = (value: string) => {
    console.log('>>>>>>>>>>>>>>>>>', value);
    this.step = value;
  }

}
