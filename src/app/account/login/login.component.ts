import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../../shared/models/user.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // ------ Formulario de Login ------

  loginForm = new FormGroup({
    emailLogin: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')]),
    passwordLogin: new FormControl('', Validators.required)
  });

 

  get emailLogin() { return this.loginForm.get('emailLogin'); }
  get passwordLogin() { return this.loginForm.get('passwordLogin'); }


  constructor(private route: Router, private fb: FormBuilder) { }

  ngOnInit(): void {

  }



}
