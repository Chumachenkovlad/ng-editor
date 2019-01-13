import { Formatting } from './formatting';
import { Word } from './word';

export interface EditableWord extends Word {
  element: HTMLElement;
  formattings: Formatting[];
}
