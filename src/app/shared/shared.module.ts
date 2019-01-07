import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { BannerComponent } from './banner/banner.component';
import { SubBannerComponent } from './sub-banner/sub-banner.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [LayoutModule, BannerComponent, SubBannerComponent],
  declarations: [BannerComponent, SubBannerComponent]
})
export class SharedModule { }
