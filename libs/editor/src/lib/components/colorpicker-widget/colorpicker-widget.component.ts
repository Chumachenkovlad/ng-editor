import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { ColorpickerDialogComponent } from '../colorpicker-dialog/colorpicker-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'ec-colorpicker-widget',
  templateUrl: './colorpicker-widget.component.html',
  styleUrls: ['./colorpicker-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorpickerWidgetComponent {
  constructor(public dialog: MatDialog) {}

  @Output() colorSelected = new EventEmitter<string>(true);

  openDialog(): void {
    const dialogRef = this.dialog.open(ColorpickerDialogComponent, {
      width: '250px',
      height: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.colorSelected.emit(result);
    });
  }
}
