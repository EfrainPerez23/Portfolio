import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { InterestsComponent } from './interests/interests.component';
import { InterestComponent } from './interests/interest/interest.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    TranslateModule
  ],
  declarations: [InterestsComponent, InterestComponent],
  exports: [
    InterestsComponent,
    InterestComponent
  ]
})
export class ComponentsModule { }
