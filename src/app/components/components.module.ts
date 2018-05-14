import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { InterestsComponent } from './interests/interests.component';
import { InterestComponent } from './interests/interest/interest.component';
import { TranslateModule } from '@ngx-translate/core';
import { SkillsComponent } from './skills/skills.component';
import { SkillComponent } from './skills/skill/skill.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    TranslateModule
  ],
  declarations: [InterestsComponent, InterestComponent, SkillsComponent, SkillComponent],
  exports: [
    InterestsComponent,
    InterestComponent,
    SkillComponent,
    SkillsComponent
  ]
})
export class ComponentsModule { }
