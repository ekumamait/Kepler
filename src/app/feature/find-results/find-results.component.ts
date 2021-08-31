import {Component, OnInit, ViewChild} from '@angular/core';
import {TestResults} from "../interface";
import {userResults} from "../../../assets/data-server/released-data";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-find-results',
  templateUrl: './find-results.component.html',
  styleUrls: ['./find-results.component.css']
})
export class FindResultsComponent implements OnInit {

  TESTS_RESULTS_DATA: TestResults[] = userResults;
  searchField: string = '';
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  testResultsDisplayColumns: Array<string> = ['ID', 'LNAME', 'FNAME', 'MNAME', 'DOB', 'STREET'];
  displayTable: Boolean = false;
  testResultsDataSource = new MatTableDataSource<TestResults>(this.TESTS_RESULTS_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.testResultsDataSource.paginator = this.paginator;
  }

  onSearch = (name: string) => {
    this.displayTable = true;
    const results = userResults.filter( testResult =>
      testResult.FNAME.includes(name)
      || testResult.LNAME.includes(name)
      || testResult.DOB.includes(name)
      || testResult.ID === +name
    )
    this.testResultsDataSource = new MatTableDataSource<TestResults>(results);
    this.ngAfterViewInit()
  }

}
