
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialComponentsModule } from './material.module';
import { ReactiveFormsTyped } from 'reactive-forms-typed'

const exports = [
  FormsModule,
  ReactiveFormsModule,
  ReactiveFormsTyped
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
