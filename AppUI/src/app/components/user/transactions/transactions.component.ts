import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  userId: number;
  type: string;
  amount: number;
  date: string;
  refId:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {userId: 1, type: 'Credit', amount: 10000, date: '3-12-2022', refId: 3567658478},
  {userId: 2, type: 'Debit', amount: 8000, date: '09-12-2022', refId: 7687346634},
  {userId: 3, type: 'Debit', amount: 16000, date: '16-12-2022', refId: 3253545355},
  {userId: 4, type: 'Credit', amount:30000, date: '21-12-2022', refId: 3535465463},
  {userId: 5, type: 'Credit', amount: 10000, date: '27-12-2022', refId: 6756544363},
];

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  displayedColumns: string[] = ['userId', 'type', 'amount', 'date','refId'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  
}
