import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Formatting, Word } from '../../models';

@Component({
  selector: 'ec-editor-toolbar',
  templateUrl: './editor-toolbar.component.html',
  styleUrls: ['./editor-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorToolbarComponent {
  @Input() formattings: Formatting[];
  @Input() synonymous: Word[];

  @Output() formattingChanged = new EventEmitter<Partial<Formatting>>(true);

  toggleFormatting(formatting: Formatting) {
    this.formattingChanged.emit({
      ...formatting,
      isApplied: !formatting.isApplied
    });
  }
  changeWord(synonym: Word) {
    this.formattingChanged.emit({
      propertyPath: 'innerText',
      appliedValue: synonym.word
    });
  }
}
