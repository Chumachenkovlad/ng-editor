import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatTooltipModule
];

@NgModule({
  imports: [CommonModule, ...MATERIAL_MODULES],
  exports: [CommonModule, MATERIAL_MODULES]
})
export class SharedModule {}
