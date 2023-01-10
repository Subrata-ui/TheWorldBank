import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  amount: number;
  purpose: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Mr. Mohon Roy', amount: 500000.00, purpose: 'Home Loan'},
  {position: 2, name: 'Miss. Chandana Mandal', amount: 200000.00, purpose: 'Car Loan'},
  
];
@Component({
  selector: 'app-loan-applications',
  templateUrl: './loan-applications.component.html',
  styleUrls: ['./loan-applications.component.css']
})
export class LoanApplicationsComponent {
  displayedColumns: string[] = ['position', 'name', 'amount', 'purpose', 'action'];
  dataSource = ELEMENT_DATA;
}
