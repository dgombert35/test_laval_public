import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule,
         MatFormFieldModule,
         MatIconModule,
         MatInputModule,
         MatSelectModule,
         MatSlideToggleModule,
         MatToolbarModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { Shared } from './shared';

@NgModule({
  declarations: [
  ],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule
  ],
  providers: [Shared],
  bootstrap: []
})
export class SharedModule { }
