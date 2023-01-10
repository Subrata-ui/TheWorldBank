import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OpenNewAccount } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  customerName: string;
  availableBalance: number;
  isUserAdminType: boolean = true;
  newAccountOpened: OpenNewAccount[] = [];
  displayedColumns: string[] = ['id', 'fullName', 'gender', 'dateOfBirth', 'mobNum', 'email', 'address', 'action'];
  //dataSource: MatTableDataSource<any[]>;
  dataSource = new MatTableDataSource(this.newAccountOpened);
  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('paginatorPageSize') paginatorPageSize: MatPaginator;

  pageSizes = [4, 5, 6];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator = this.paginatorPageSize;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  

  ngOnInit() {
    var item = JSON.parse(localStorage.getItem("openingNewAccount") || '{}');
    if (item.length > 0) {
      //this.newAccountOpened = item;
      this.dataSource = new MatTableDataSource(item);
      if (localStorage.getItem("Role") === "User") {
        this.isUserAdminType = false;
      }
      let currentUser = JSON.parse(localStorage.getItem('CurrentUser') || '{}');
      if (currentUser.length > 0) {
        this.customerName = currentUser[0].firstName;
        this.availableBalance = currentUser[0].balance;
      }
    }
  }

  removeCart(id: any) {
    console.log(id);
    var item = JSON.parse(localStorage.getItem("openingNewAccount") || '{}');
    let index = item.findIndex((x: { id: number; }) => x.id == id);

    //Then remove from the array item list
    item.splice(index, 1);
    this.dataSource = new MatTableDataSource(item);
    localStorage.setItem("openingNewAccount", JSON.stringify(item));
  }
  // logout() {
  //   this.authService.logout();
  //   this.router.navigate(['home']);
  // }
}
