import { Formatting } from './models';

export const FORMATTINGS: Partial<Formatting>[] = [
  {
    icon: 'format_bold',
    propertyPath: 'style.fontWeight',
    defaultValue: '',
    appliedValue: 'bold'
  },
  {
    icon: 'format_italic',
    propertyPath: 'style.fontStyle',
    defaultValue: 'normal',
    appliedValue: 'italic'
  },
  {
    icon: 'format_underlined',
    propertyPath: 'style.fontDecoration',
    defaultValue: 'normal',
    appliedValue: 'underlined'
  }
];
