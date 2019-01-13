import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-userfees',
  templateUrl: './userfees.component.html',
  styleUrls: ['./userfees.component.css']
})
export class UserfeesComponent implements OnInit {
  columnDefs = [
    { headerName: 'Id', field: 'userId', sortable: true, filter: true },
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Surname', field: 'surname', sortable: true, filter: true },
    { headerName: 'Suspended', field: 'isSuspended', sortable: true, filter: true },
    { headerName: 'Activation End Date', field: 'activationEndDate', sortable: true, filter: true },
    { headerName: 'Birth Date', field: 'DOB', sortable: true, filter: true }
  ];
  gridApi: any;

  rowData = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers();
    this.subscribeUserService();


  }

  subscribeUserService() {
    this.userService.userList$.subscribe(data => {
      this.rowData = data;
    });
  }

  onSelectionChanged(e) {
    console.log(e);
    const selectedRows = this.gridApi.getSelectedRows();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    // this.gridColumnApi = params.columnApi;

    // this.http
    //   .get(
    //     "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json"
    //   )
    //   .subscribe(data => {
    //     this.rowData = data;
    //   });
  }

}
