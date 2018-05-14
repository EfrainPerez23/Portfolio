import { Component, OnInit, Input } from '@angular/core';
import { Interest } from '../models/interest';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent implements OnInit {

  private _interest: Interest;

  public constructor() { }

  public ngOnInit(): void { }

  @Input('interest')
  public set interest(interest: Interest) {
    this._interest = interest;
  }

  public get interest(): Interest {
    return this._interest;
  }

}
