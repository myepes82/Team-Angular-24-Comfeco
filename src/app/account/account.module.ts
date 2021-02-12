import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { RegisterComponent } from './register/register.component';
import { ActivateComponent } from './activate/activate.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { LoginComponent } from './login/login.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [RegisterComponent, ActivateComponent, PasswordResetComponent, LoginComponent],
  exports:[RegisterComponent, ActivateComponent, PasswordResetComponent, LoginComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule
  ]
})
export class AccountModule { }
