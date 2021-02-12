import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';



@NgModule({
  declarations: [HasAnyAuthorityDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
