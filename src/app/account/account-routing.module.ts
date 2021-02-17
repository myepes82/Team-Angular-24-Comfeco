import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateComponent } from './activate/activate.component';
import { LoginComponent } from './login/login.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'verification/:id',
    component: ActivateComponent
  },
  {
    path: 'password-reset',
    component: PasswordResetComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
