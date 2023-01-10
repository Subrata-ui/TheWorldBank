import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatRadioModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    MatGridListModule,
    MatPaginatorModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatRadioModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    MatGridListModule,
    MatPaginatorModule
  ],
  providers:[
    //{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  ],
})
export class MaterialModule { }