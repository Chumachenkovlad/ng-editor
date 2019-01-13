import { ChangeDetectionStrategy, Component } from '@angular/core';
import { get } from 'lodash';
import { of, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { FORMATTINGS } from '../../formattings';
import { EditableWord } from '../../models';
import { SynonymousService } from '../../services';

@Component({
  selector: 'ec-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorComponent {
  public get synonymous$() {
    return this.synonymousSubject
      .asObservable()
      .pipe(
        switchMap(
          word =>
            word !== null ? this.synonymousService.getSynonymous(word) : of([])
        )
      );
  }

  public selectedWord: EditableWord | null = null;

  private synonymousSubject = new Subject<string | null>();

  constructor(private readonly synonymousService: SynonymousService) {}

  selectWord(element: HTMLElement) {
    const word = element.textContent;
    const formattings = FORMATTINGS.forEach(formatting => {
      const value = get(element, formatting.propertyPath);
    });

    // TODO select word and save actual formatting state
  }

  chnageFormatting() {
    // todo apply formatting togglers
    // todo change text
  }

  unselectWord() {
    this.selectWord = null;
  }
}
