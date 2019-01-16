import {
  ChangeDetectionStrategy,
  Component,
  ChangeDetectorRef,
  Renderer2
} from '@angular/core';
import { get } from 'lodash';
import { of, Subject, BehaviorSubject, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { FORMATTINGS } from '../../formattings';
import { EditableWord, Formatting, Word } from '../../models';
import { SynonymousService } from '../../services';
import { getWordValue } from '../../utils';

@Component({
  selector: 'ec-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorComponent {
  public selectedWord: EditableWord | null = null;

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly renderer: Renderer2
  ) {}

  selectWord(element: HTMLElement) {
    const formattings = FORMATTINGS.map(formatting => {
      const value = getWordValue(element, formatting);
      return { ...formatting, value };
    });

    this.selectedWord = {
      element,
      formattings
    };
  }

  changeFormatting(formatting: Formatting) {
    if (!this.selectedWord) {
      return;
    }

    const { property, style, value } = formatting;

    if (property) {
      this.selectedWord.element[property] = value;
    }

    if (style) {
      this.renderer.setStyle(this.selectedWord.element, style, value);
    }

    this.selectedWord = {
      ...this.selectedWord,
      formattings: [
        ...this.selectedWord.formattings.filter(
          oldFormatting => oldFormatting.key !== formatting.key
        ),
        formatting
      ]
    };
    this.cdr.detectChanges();
  }

  unselectWord() {
    this.selectWord = null;
  }
}
