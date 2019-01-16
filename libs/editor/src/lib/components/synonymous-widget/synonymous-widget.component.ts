import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output
} from '@angular/core';
import { isNil } from 'lodash';
import { SynonymousService } from '../../services';
import { Observable } from 'rxjs';
import { Word } from '../../models';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'ec-synonymous-widget',
  templateUrl: './synonymous-widget.component.html',
  styleUrls: ['./synonymous-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SynonymousWidgetComponent {
  public synonymous$: Observable<Word[]>;

  @Output() public synonymSelected = new EventEmitter(true);
  @Input()
  set word(word: string) {
    if (!isNil(word)) {
      this.synonymous$ = this.synonymousService.getSynonymous(word);
    }
  }
  constructor(private readonly synonymousService: SynonymousService) {}
}
