import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ec-colorpicker-dialog',
  templateUrl: './colorpicker-dialog.component.html',
  styleUrls: ['./colorpicker-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorpickerDialogComponent {
  public colorControl = new FormControl('red');
  constructor(public dialogRef: MatDialogRef<ColorpickerDialogComponent>) {}

  selectColor() {
    this.dialogRef.close(this.colorControl.value);
  }
}
