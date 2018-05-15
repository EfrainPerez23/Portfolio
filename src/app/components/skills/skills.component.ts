import { Component, OnInit } from '@angular/core';
import { Skill } from './models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  private _skills: Skill[] = [
    {
      icon: 'fa-terminal',
      title: 'PROGRAMMING_LANGUAGE',
      elements: [
        {
          name: 'Typescript',
          icon: '../../../../assets/img/typescript_icon.png'
        },
        {
          name: 'C++',
          icon: '../../../../assets/img/c_logo.png'
        },
        {
          name: 'Git',
          icon: '../../../../assets/img/git_icon.jpge'
        }
      ]
    },
    {
      icon: 'fa-terminal',
      title: 'PROGRAMMING_LANGUAGE',
      elements: [
        {
          name: 'Typescript',
          icon: '../../../../assets/img/typescript_icon.png'
        },
        {
          name: 'C++',
          icon: '../../../../assets/img/c_logo.png'
        },
        {
          name: 'Git',
          icon: '../../../../assets/img/git_icon.jpge'
        }
      ]
    }
  ];

  public constructor() { }

  public ngOnInit(): void { }

  public get skills(): Skill[] {
    return this._skills;
  }

}
