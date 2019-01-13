import { NgModule } from '@angular/core';
import { CoreModule } from '@ng-editor/core';
import { EditorModule } from '@ng-editor/editor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, EditorModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
