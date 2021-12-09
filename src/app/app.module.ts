import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TournamentComponent } from './tournament/tournament.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTournamentComponent } from './create-tournament/create-tournament.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ConfigureComponent } from './configure/configure.component';


@NgModule({
  declarations: [
    AppComponent,
    TournamentComponent,
    TourDetailComponent,
    MessagesComponent,
    DashboardComponent,
    CreateTournamentComponent,
    CreateUserComponent,
    ConfigureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
