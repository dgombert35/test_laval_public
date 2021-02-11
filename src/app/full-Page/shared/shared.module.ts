import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatSlideToggleModule, MatToolbarModule } from '@angular/material';
import { CommonModule } from '@angular/common';

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
    MatSlideToggleModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
