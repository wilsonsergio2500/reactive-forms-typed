
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialComponentsModule } from './material.module';
import { ReactiveFormsTypedModule } from 'reactive-forms-typed';

const exports = [
  FormsModule,
  ReactiveFormsModule,
  ReactiveFormsTypedModule
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialComponentsModule,
    ...exports
  ],
  exports: [
    ...exports
  ]
})
export class SharedModule { }
