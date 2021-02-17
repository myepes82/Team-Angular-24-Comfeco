import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser, User } from '../../shared/models/user.model';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  // ------ Formulario de Registro ------

  my_password?:String  = ''
  wrongPassword?: boolean = false;
  hide = true;
  unvalidSave= false;


  registerForm = new FormGroup({
    nickName: new FormControl('',[Validators.required,  Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')]),
    password: new FormControl('', [Validators.required,  Validators.minLength(8), Validators.maxLength(20)]),
    passwordConfirm: new FormControl('', [Validators.required,  Validators.minLength(8), Validators.maxLength(20)]),
  });

  get nickName() { return this.registerForm.get('nickName'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get passwordConfirm() { return this.registerForm.get('passwordConfirm'); }

  constructor(private registerService: RegisterService) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.registerForm.reset()
  }






  generateUser(): User {
    return {
      ...new User(),
      nickName: this.registerForm.get('nickName')!.value,
      email: this.registerForm.get('email')!.value,
      password: this.registerForm.get('password')!.value
    }
  }





  addPasswordContent(): void{
    this.my_password = this.registerForm.get('password').value
  }





  register(): void{
    if(this.my_password === this.registerForm.get('passwordConfirm').value){
      this.unvalidSave = false;
      this.registerService.register(this.generateUser())
      .subscribe(res => {
        console.log(res)
      }, error => {
        console.log(error)
      })
    }else this.unvalidSave= true;
  }

}
