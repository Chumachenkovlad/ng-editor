import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { Formatting, EditableWord } from '../../models';
import { get, sortBy, isNil } from 'lodash';
import { FORMATTINGS } from '../../formattings';
@Component({
  selector: 'ec-editor-toolbar',
  templateUrl: './editor-toolbar.component.html',
  styleUrls: ['./editor-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorToolbarComponent {
  @Input()
  public set selectedWord(word: EditableWord) {
    if (isNil(word)) {
      return;
    }

    this.togglerFormattings = sortBy(
      word.formattings.filter(f => f.type === 'toggler'),
      'key'
    );

    this.word = get(word.element, 'innerText');
  }

  @Output() formattingChanged = new EventEmitter<Partial<Formatting>>(true);

  public togglerFormattings: Formatting[] = sortBy(
    FORMATTINGS.filter(f => f.type === 'toggler'),
    'key'
  );
  public word = '';

  toggleFormatting(formatting: Formatting) {
    this.formattingChanged.emit({
      ...formatting,
      value: formatting.value ? '' : formatting.appliedValue
    });
  }
}
