import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatTooltipModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

const MATERIAL_MODULES = [
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatTooltipModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ...MATERIAL_MODULES],
  exports: [CommonModule, ReactiveFormsModule, ...MATERIAL_MODULES]
})
export class SharedModule {}
