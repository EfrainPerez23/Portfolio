import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private _name = 'Efraín Abdiel Pérez Gómez';
  private _title = 'Junior Software Developer && Machine Learning lover!';

  public constructor() { }

  public ngOnInit(): void { }

  public get name(): string {
    return this._name;
  }

  public get title(): string {
    return this._title;
  }

}
