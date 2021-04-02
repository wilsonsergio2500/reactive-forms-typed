<div align="center">
<h1>ReativeForms Types</h1>

<p>Reactive Forms with type</p>
</div>
## The Problem

This one is mainly part of an opinion. One that I have found to assist me in promptly interpreting and creating a structure  easily to derived. I enjoy things that aid my System 1 - brain's intuitive and unconscious thinking mode - syntactically and or organizationally. However, this is but one opinion, and perhaps Angular as a library community will come up with one that is more compelling. 

This library is centered around the idea of Reactive Forms, and how to Reactive Form in a way that feels complete and total. I do not frame other ways to do forms nor I am advocating for a specific one. I just happen to discuss this way as one that I enjoy the most.

For those that poses familiarity of Reactive Forms, the below is a view that is way too familiar.

```javascript
this.formGroup = this.formBuilder.group({
  username: [null, Validators.required],
  password: [null, [Validators.required, Validators.minLength(6)]]
});
```

This is great, here I could somewhat derived how my form would look like on the other side - the template side. However, there were elements in this declaration that somehow never felt fulfilling in telling the story or applying safety on form(s) way too important not to enforce.

There are multiple examples of this challenge, and would not entertain or dwell on this point too far, but take the below can-do for instance.

```javascript
this.formGroup.setValue({
  username: 'user',
  password: 'password',
  message: 'Is this a formcontrol?'
});
```

It seems odd that as principle the form group is not aware of the form controls that are part of its tree, and this lack of awareness is exteriorized across all the interactions with the form group as an API.

## The Solution

```bash
npm install reactive-forms-typed --save
```

Then inject into Angular module, as such

```typescript
import { ReactiveFormsTypedModule } from 'reactive-forms-typed';
…
@NgModule ({....
  imports: [...,
  	ReactiveFormsTypedModule,
	…]
})
```

This would enabled to utilized formbuilder but with some nuance - integrating type awareness. For instance, now we could have..

```typescript
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { NgTypeFormGroup, FormTypeBuilder } from 'reactive-forms-typed';
import { ILoginForm } from './login.form';

@Component({
    ...
  })
  export class LoginComponent implements OnInit {

  form: NgTypeFormGroup<ILoginForm>;

    constructor(
      private formTypeBuilder: FormTypeBuilder,
    ) {}

    ngOnInit(){

        this.form = this.formTypeBuilder.group<ILoginForm>({
          username: [null, [ Validators.required ]],
          password: [null, [Validators.required, Validators.minLength(6)]]
        });

    }
```

```typescript
export interface ILoginForm{
    username: string;
    password: string;
}
```

This results in a very different experience. We are introduced with very a nice type recognition. Making form group handling safer and intuitive, and on the other hand  even enhancing developer experience.

![image-20210319132228275](https://im.ages.io/AZGpXintl1-h120-q90.png)

Doesn't it completes me? 

![image-20210319132228275](https://im.ages.io//D69DWintl1)

A common tree structure, I used in my projects when introducing this library looks like the following:

```tr
login-component
│   login.component.html
│   login.component.scss
|	login.component.ts
|	login.form.ts
```

Forms are very important, This is why I love giving their contract their own space - own file.  It ease my intuition, provides clarity and it serves me as visual aid for communicating expectation and how my models would be shaped as.

Watch your code simply gain awareness, and police over your types.

![image-20210319132228275](https://im.ages.io/KX9RWintl1)

## Beyond declaring the form

We could also introduce type awareness in other areas like in validators for example. For this endeavor, I have introduced a generic helper implementation with this library and this means that we could do like the following

```typescript
  form: NgTypeFormGroup<IRegisterForm>;

  constructor(
    private formTypeBuilder: FormTypeBuilder
  ) {}

  ngOnInit() {

    this.form = this.formTypeBuilder.group<IRegisterForm>({
      username: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPasword: [null,
        [(c: NgTypeFormControlValidator<string, IRegisterForm>) => {
          if (c && c.parent && c.parent.value.password === c.value) {
            return null;
          }
          return { notMatch: true };
        }]
      ]
    });
 ...
```

## Beyond the Types

Another action item when dealing with Reactive Forms is the rendering of error states on forms. The below is a common practice.

```html
<!-- in material angular  -->
<mat-error *ngIf="emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
   Please enter a valid email address
</mat-error>
```

```html
<!-- in bootstrap -->
<small class="text-danger" *ngIf="emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
    Please enter a valid email address
</small>
```

However, the above is quite verbose and redundant - specially when introducing ***required*** error states for every single form control item. Needless to say, the markup could grow in size relative to the amount of validators resulting in error states. Wouldn't it be simple for the element to just know where to display the error message and end of the story? Thankfully this library introduces a directive - ***formControlOnErrorItem*** - that simplifies the markup and make this possible. Now we could do the following

```html
<form [formGroup]="form" >

  <mat-form-field class="block">
    <input matInput type="text" placeholder="Username" formControlName="username">
    <mat-error formControlOnErrorItem="username"></mat-error>
  </mat-form-field>
...
```

Note that in ***formControlOnErrorItem*** we specified the ***formControlName*** 

![image-20210319132228275](https://im.ages.io/hB5dWintl1)

I have taken the liberty to introduced common error messages. Hence if the users of the library are willing to accept a little bit of magic, this could even reduce the amount error state declaration even further. However, in the same spirit of the strongly type the user can also declared their own error messages. Like such:

```typescript
 form: NgTypeFormGroup<IRegisterForm>;

  constructor(
    private formTypeBuilder: FormTypeBuilder
  ) {}

  ngOnInit() {

    this.form = this.formTypeBuilder.group<IRegisterForm>({
      username: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPasword: [null,
        [(c: NgTypeFormControlValidator<string, IRegisterForm>) => {
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
...
```

![image-20210319132228275](https://im.ages.io/aWmnWintl1)

Enjoy coding, and be strongly typed my friends
