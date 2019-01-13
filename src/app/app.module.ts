import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './/app-routing.module';
import { HomeModule } from './home/home.module';
import { UserfeesModule } from './userfees/userfees.module';
import { ContactModule } from './contact/contact.module';
import { HttpModule } from '@angular/http';
import { RestService } from './shared/services/rest.service';
import { FeesService } from './shared/services/fees.service';
import { UserService } from './shared/services/user.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    HttpModule,
    UserfeesModule,
    ContactModule,
    AppRoutingModule,
  ],
  providers: [RestService, UserService, FeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
