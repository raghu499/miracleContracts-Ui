import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDashboardComponent } from './component/main-dashboard/main-dashboard.component';
import { MasterComponent } from './master/master.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './component/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    children: [
     
    ]
  },
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: 'homePage',
        component: HomePageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
