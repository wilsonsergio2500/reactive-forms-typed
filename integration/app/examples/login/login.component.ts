import { Component, AfterContentInit, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { NgTypeFormGroup, FormTypeBuilder } from 'reactive-forms-typed';
import { ILoginForm } from './login.form';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: [`login.component.scss`]
  })
  export class LoginComponent implements OnInit {

    form: NgTypeFormGroup<ILoginForm>;

    constructor(
      private formTypeBuilder: FormTypeBuilder
    ) {
    }

    ngOnInit(){

        this.form = this.formTypeBuilder.group<ILoginForm>({
          username: [null, [ Validators.required ]],
          password: [null, [Validators.required, Validators.minLength(6)]]
        });

        // this.form.setFormErrors({
        //   username: {
        //     required: 'Username is required'
        //   },
        //   password:{
        //     required: 'Password is required',
        //     minlength: 'Password is invalid'
        //   }
        // })
      

    }

    submit(){}

  
  } 
