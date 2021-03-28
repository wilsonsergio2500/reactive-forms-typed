import { Component, AfterContentInit, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { tap } from 'rxjs/internal/operators/tap';
import { delay } from 'rxjs/operators';
import { NgTypeFormControlValidator, NgTypeFormGroup, FormTypeBuilder } from 'reactive-forms-typed';
import { IRegisterForm } from './register.form';

@Component({
  selector: 'register',
  templateUrl: 'register.component.html',
  styleUrls: [`register.component.scss`]
})
export class RegisterComponent implements OnInit {

  form: NgTypeFormGroup<IRegisterForm>;

  constructor(
    private formTypeBuilder: FormTypeBuilder
  ) {

  }

  ngOnInit() {

    this.form = this.formTypeBuilder.group<IRegisterForm>({
      username: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPasword: [null, [(c: NgTypeFormControlValidator<string, IRegisterForm>) => {
        if (c && c.parent && c.parent.value.password === c.value) {
          return null;
        }
        return { notMatch: true };
      }]
      ]
    });

    this.form.setFormErrors({
      username: {
          required: 'Username is required',
          email: 'Username must be a valid email'
      },
      password: {
          required: 'Password is required',
          minlength: 'Password is invalid'
      },
      confirmPasword: {
          notMatch: 'Password must match'
      }
    });


    // this.form.controls.password.valueChanges.pipe(
    //   delay(1),
    //   tap(_ => {
    //     console.log('updated..');
    //     this.form.controls.confirmPasword.updateValueAndValidity();
    //   })
    // ).subscribe();

    this.form.addFormControlValidityTracker('password', 'confirmPasword');




  }




} 
