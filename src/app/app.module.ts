import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShortsentencePipe } from './shortsentence.pipe';
import { BasicColorDirective } from './basic-color.directive';
import { AdvancedcolorDirective } from './advancedcolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShortsentencePipe,
    BasicColorDirective,
    AdvancedcolorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
