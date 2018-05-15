import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  private _clicked: boolean;
  private _skill: Skill;

  public constructor() { }

  public ngOnInit(): void { }

  public get clicked(): boolean {
    return this._clicked;
  }

  @Input('skill')
  public set skill(skill: Skill) {
    this._skill = skill;
  }

  public get skill(): Skill {
    return this._skill;
  }

  public onSkillClicked(): void {
    this._clicked = !this._clicked;
  }

}
