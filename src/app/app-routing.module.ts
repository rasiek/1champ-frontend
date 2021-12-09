import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigureComponent } from './configure/configure.component';
import { CreateTournamentComponent } from './create-tournament/create-tournament.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';
import { TournamentComponent } from './tournament/tournament.component';

const routes: Routes = [
  { path: 'tournaments', component: TournamentComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: TourDetailComponent },
  {
    path: 'create-tournament',
    component: CreateTournamentComponent,
    children: [
      {
        path: 'configure',
        component: ConfigureComponent
      },
    ]
  },
  { path: 'create-user', component: CreateUserComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
