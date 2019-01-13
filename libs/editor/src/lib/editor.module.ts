import { NgModule } from '@angular/core';
import { SharedModule } from '@ng-editor/shared';

import { COMPONENTS } from './components';
import { CONTAINERS } from './containers';
import { SERVICES } from './services';

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS, ...CONTAINERS],
  exports: [...CONTAINERS],
  providers: [...SERVICES]
})
export class EditorModule {}
