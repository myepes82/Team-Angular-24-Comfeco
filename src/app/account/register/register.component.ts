import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../../shared/models/user.model';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // ------ Formulario de Registro ------

  hide = true;


  registerForm = new FormGroup({
    nickName: new FormControl('',Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')]),
    password: new FormControl('', Validators.required),
    passwordConfirm: new FormControl('', [Validators.required]),
  });

  get nickName() { return this.registerForm.get('nickName'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get passwordConfirm() { return this.registerForm.get('passwordConfirm'); }

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {

  }

  verifyPasswordConfirm(){
    if (this.passwordConfirm !== this.password){
      this.passwordConfirm.setErrors({notUnique:true});
      console.log("NO COINCIDE");
    }
  }

  onSave() {
    //console.log(this.registerForm.value);

    this.registerService.register(this.registerForm.value)
    .subscribe((res) => {
      console.log(res);
    })


  }

}
