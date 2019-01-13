import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserfeesComponent } from './userfees.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
  ],
  exports: [AgGridModule],
  declarations: [UserfeesComponent]
})
export class UserfeesModule { }
