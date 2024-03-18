import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupAuthComponent } from './signup-auth/signup-auth.component';
import { LoginComponent } from './login/login.component';
import { CaseComponent } from './case/case.component';
import { SignupHomeComponent } from './signup-home/signup-home.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'Signup',
    component: SignupAuthComponent,
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: 'Case',
    component: CaseComponent,
  },
  {
    path: 'signuphome',
    component: SignupHomeComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
