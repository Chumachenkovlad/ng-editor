import { NgModule } from '@angular/core';
import { SharedModule } from '@ng-editor/shared';

import { COMPONENTS } from './components';
import { CONTAINERS } from './containers';
import { SERVICES } from './services';
import { SynonymousWidgetComponent } from './components/synonymous-widget/synonymous-widget.component';
import { ColorpickerWidgetComponent } from './components/colorpicker-widget/colorpicker-widget.component';
import { ColorpickerDialogComponent } from './components/colorpicker-dialog/colorpicker-dialog.component';

@NgModule({
  imports: [SharedModule],
  declarations: [
    ...COMPONENTS,
    ...CONTAINERS,
    ColorpickerWidgetComponent,
    ColorpickerDialogComponent
  ],
  exports: [...CONTAINERS],
  providers: [...SERVICES],
  entryComponents: [ColorpickerDialogComponent]
})
export class EditorModule {}
