import {Component, OnInit, ViewChild} from '@angular/core';
import {TestResults} from "../interface";
import {userResults} from "../../../assets/data-server/released-data";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  PATIENTS_DATA: TestResults[] = userResults;
  selectPatient: boolean = true;
  searchField: string = '';
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  patientsDisplayColumns: Array<string> = ['ID', 'LNAME', 'FNAME', 'MNAME', 'DOB', 'STREET'];
  displayTable: Boolean = false;
  patientDataSource = new MatTableDataSource<TestResults>(this.PATIENTS_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.patientDataSource.paginator = this.paginator;
  }

  onSearch = (name: string) => {
    this.displayTable = true;
    const results = userResults.filter( testResult =>
      testResult.FNAME.includes(name)
      || testResult.LNAME.includes(name)
      || testResult.DOB.includes(name)
      || testResult.ID === +name
    )
    this.patientDataSource = new MatTableDataSource<TestResults>(results);
    this.ngAfterViewInit()
  }

}
