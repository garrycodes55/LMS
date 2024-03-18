import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SignupAuthComponent } from './signup-auth/signup-auth.component';
import { LoginComponent } from './login/login.component';
import { CaseComponent } from './case/case.component';
import { FormsModule } from '@angular/forms';
import { TwoWayComponent } from './two-way/two-way.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupHomeComponent } from './signup-home/signup-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewHeaderComponent } from './new-header/new-header.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    HeaderComponent,
    HomeComponent,
    SignupAuthComponent,
    LoginComponent,
    CaseComponent,
    TwoWayComponent,
    SignupHomeComponent,
    NewHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
