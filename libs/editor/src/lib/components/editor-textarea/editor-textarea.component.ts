import { ChangeDetectionStrategy, Component, EventEmitter, Host, Output } from '@angular/core';

import { EDITABLE_CLASS } from '../../constants';
import { EditorComponent } from '../../containers/editor/editor.component';

@Component({
  selector: 'ec-editor-textarea',
  templateUrl: './editor-textarea.component.html',
  styleUrls: ['./editor-textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorTextareaComponent {
  constructor(@Host() private readonly editor: EditorComponent) {}

  @Output() public wordSelected = new EventEmitter(true);

  public selectWord() {
    const selection = window.getSelection();
    const parent = selection.anchorNode.parentElement;

    if (parent.classList.contains(EDITABLE_CLASS)) {
      this.editor.selectWord(parent);
    } else {
      const range = selection.getRangeAt(0);
      const container = document.createElement('span');
      container.classList.add(EDITABLE_CLASS);
      range.surroundContents(container);
      this.editor.selectWord(container);
    }
  }
}
