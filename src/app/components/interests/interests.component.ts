import { Component, OnInit } from '@angular/core';
import { Interest } from './models/interest';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit {

  private _interests: Interest[] = [];

  public constructor() {
    this._interests = [
      {
        image: '../../../../assets/img/angular_logo.png',
        title: 'Angular Framework',
        description: 'ANGULAR_DESC'
      },
      {
        image: '../../../../assets/img/sass_logo.png',
        title: 'Sass',
        description: 'SASS_DESC'
      },
      {
        image: '../../../../assets/img/flask_python.png',
        title: 'Flask Framework',
        description: 'FLASK_DESC'
      },
      {
        image: '../../../../assets/img/machine_learning.png',
        title: 'Machine Learning',
        description: 'ML_DESC'
      },
      {
        image: '../../../../assets/img/node_js_logo.png',
        title: 'Node JS',
        description: 'ANGULAR_DESC'
      },
      {
        image: '../../../../assets/img/swift_logo.jpg',
        title: 'Swift',
        description: 'SWIFT_DESC'
      }
    ];
  }

  public ngOnInit(): void { }

  public get interests(): Interest[] {
    return this._interests;
  }

}
