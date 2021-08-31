import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ReleaseTableDataInterface, SavedOrdersDataInterface} from "../interface";
import {labWaitingData, pendingData, releasedData, savedOrdersData} from "../../../assets/data-server/released-data";
import {MatPaginator, MatPaginatorIntl} from "@angular/material/paginator";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  viewAll: boolean = true
  status1: boolean = false;
  status2: boolean = false;
  status3: boolean = false;
  status4: boolean = false;
  RELEASE_DATA: ReleaseTableDataInterface[] = releasedData;
  PENDING_DATA: ReleaseTableDataInterface[] = pendingData;
  WAITING_DATA: ReleaseTableDataInterface[] = labWaitingData;
  SAVED_ORDERS_DATA: SavedOrdersDataInterface[] = savedOrdersData;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild('paginator1') paginator1: MatPaginator;
  // @ts-ignore
  @ViewChild('paginator2') paginator2: MatPaginator;

  // @ts-ignore
  @ViewChild('paginator3') paginator3: MatPaginator;

  releaseDisplayColumns: Array<string> = ['checkbox','NUMBER', 'NAME', 'DATEOFSERVICE', 'ReleasedDate', 'testsOrdered'];
  pendingDisplayColumns: Array<string> = ['checkbox','NUMBER', 'NAME', 'DATEOFSERVICE', 'testsOrdered'];
  labWaitingDisplayColumns: Array<string> = ['checkbox','NUMBER', 'NAME', 'DATEOFSERVICE', 'testsOrdered'];
  savedOrderDisplayColumns: Array<string> = ['FNAME','LNAME', 'DOB', 'createdAt', 'updatedAt'];

  releaseDataSource = new MatTableDataSource<ReleaseTableDataInterface>(this.RELEASE_DATA);
  pendingDataSource = new MatTableDataSource<ReleaseTableDataInterface>(this.PENDING_DATA);
  labWaitingDataSource = new MatTableDataSource<ReleaseTableDataInterface>(this.WAITING_DATA);
  savedOrderDataSource = new MatTableDataSource<SavedOrdersDataInterface>(this.SAVED_ORDERS_DATA);

  dashboardIcons: Array<any> =[
    {
      name: 'Mark as Reviewed',
      iconLink: 'https://kepler.simplelaboratories.com/images/review.png'
    },
    {
      name: 'Mark as Reviewed and Print',
      iconLink: 'https://kepler.simplelaboratories.com/images/print_and_review.png'
    },
    {
      name: 'Print',
      iconLink: 'https://img.icons8.com/ios/50/000000/print.png'
    },
    {
      name: 'RePrint Requisition',
      iconLink: 'https://img.icons8.com/ios/50/000000/print.png'
    }
  ]

  constructor(private matPaginatorIntl: MatPaginatorIntl) { }

  ngOnInit(): void {
    this.matPaginatorIntl.itemsPerPageLabel = 'Records Per Page'
  }

  ngAfterViewInit() {
    this.releaseDataSource.paginator = this.paginator;
    this.pendingDataSource.paginator = this.paginator1;
    this.labWaitingDataSource.paginator = this.paginator2;
    this.savedOrderDataSource.paginator = this.paginator3;
  }

  toggleViewAll = () => {
    this.viewAll = !this.viewAll;
    this.status1 = !this.status1;
    this.status2 = !this.status2;
    this.status3 = !this.status3;
    this.status4 = !this.status4;
  }

  toggleStatus1 = () => {
    this.status1 = !this.status1;
    this.viewAll = true;
    this.status2 = false;
    this.status3 = false;
    this.status4 = false;
  }

  toggleStatus2 = () => {
    this.status2 = !this.status2;
    this.viewAll = true;
    this.status1 = false;
    this.status3 = false;
    this.status4 = false;
  }

  toggleStatus3 = () => {
    this.status3 = !this.status3;
    this.viewAll = true;
    this.status1 = false;
    this.status2 = false;
    this.status4 = false;
  }

  toggleStatus4 = () => {
    this.status4 = !this.status4;
    this.viewAll = true;
    this.status1 = false;
    this.status2 = false;
    this.status3 = false;
  }

}
