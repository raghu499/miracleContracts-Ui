import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDashboardComponent } from './component/main-dashboard/main-dashboard.component';
import { MasterComponent } from './master/master.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LoginComponent,
    children: [
     
    ]
  },
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: 'dashboard',
        component: MainDashboardComponent,
      },
      {
        path: 'homePage',
        component: MainDashboardComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
