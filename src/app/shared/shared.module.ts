import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { BannerComponent } from './banner/banner.component';
import { SubBannerComponent } from './sub-banner/sub-banner.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { TrainersComponent } from './trainers/trainers.component';
import { FeesPendingComponent } from './fees-pending/fees-pending.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    AgGridModule.withComponents([]),
  ],
  exports: [LayoutModule, BannerComponent, SubBannerComponent, BirthdayComponent, TrainersComponent, FeesPendingComponent, AgGridModule],
  declarations: [BannerComponent, SubBannerComponent, BirthdayComponent, TrainersComponent, FeesPendingComponent]
})
export class SharedModule { }
