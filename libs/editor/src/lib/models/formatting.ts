export interface Formatting {
  propertyPath: string; // 'style.fontWeight',
  defaultValue: string;
  appliedValue: string; // may be regex for colour
  isApplied: boolean;
  icon: string;
}
