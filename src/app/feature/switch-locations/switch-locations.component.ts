import { Component, OnInit } from '@angular/core';
import {locationsData} from "../../../assets/data-server/released-data";

@Component({
  selector: 'app-switch-locations',
  templateUrl: './switch-locations.component.html',
  styleUrls: ['./switch-locations.component.css']
})
export class SwitchLocationsComponent implements OnInit {


  locations = locationsData

  constructor() { }

  ngOnInit(): void {
  }

}
