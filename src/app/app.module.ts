import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import {MatToolbarModule, MatIconModule, MatCheckboxModule,MatInputModule} from '@angular/material';
import { FooterComponent } from './footer/footer.component';
import { MasterComponent } from './master/master.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainDashboardComponent } from './component/main-dashboard/main-dashboard.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ContactsPageComponent } from './component/contacts-page/contacts-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MasterComponent,
    LoginComponent,
    MainDashboardComponent,
    HomePageComponent,
    ContactsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
