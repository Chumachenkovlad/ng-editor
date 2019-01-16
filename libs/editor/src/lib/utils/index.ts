import { Formatting } from '../models';
import { get } from 'lodash';
export function getWordValue(
  element: HTMLElement,
  formatting: Formatting
): string {
  const { property, style } = formatting;
  if (property) {
    return get(element, property);
  }
  return get(element, `style.${style}`);
}
