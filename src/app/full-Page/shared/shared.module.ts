import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule,
  MatDatepickerModule,
         MatFormFieldModule,
         MatIconModule,
         MatInputModule,
         MatNativeDateModule,
         MatSelectModule,
         MatSlideToggleModule,
         MatToolbarModule } from '@angular/material';
import { MarkdownModule } from 'ngx-markdown';
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MarkdownModule.forRoot(),
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MarkdownModule,
  ],
  providers: [Shared, MatDatepickerModule],
  bootstrap: []
})
export class SharedModule { }
