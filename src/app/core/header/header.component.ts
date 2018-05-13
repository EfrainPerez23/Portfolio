import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';
import { CoreService } from '../service/core.service';
import { TranslateService } from '@ngx-translate/core';
import { Profile } from '../models/profile';
import * as _ from 'lodash';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public typed: any;
  private _name = 'Efraín Abdiel Pérez Gómez';
  private titles: string[] = [];

  public constructor(private coreService: CoreService, private translateService: TranslateService) {
    this.titles = [
      'Software Developer Junior',
      'Machine Learning and Artificial Intelligence Lover!',
      'System and Computing Engineer Student',
      'I am from Panama  <i class="em em-flag-pa"></i> !'
    ];
    this.coreService.getLanguageChanged().subscribe((): void => {
      this.translateService.get(['TITLE', 'MACHINE_LEARNING', 'STUDENT']).subscribe((texts: Profile): void => {
        this.titles = _.values(texts);
        this.typed.strings = this.titles;
        this.typed.reset();
      });
    });
  }

  public ngOnInit(): void {
    this.typed = new Typed('.typed', {
      strings: this.titles,
      smartBackspace: true,
      typeSpeed: 80,
      backDelay: 500,
      stringsElement: null,
      // time before typing starts
      startDelay: 1200,
      // backspacing speed
      backSpeed: 20,
      // loop
      loop: true,
      // false = infinite
      loopCount: false,
      // show cursor
      showCursor: false,
      // character for cursor
      cursorChar: '|',
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: 'html',
      // call when done callback function
    });
  }

  public get name(): string {
    return this._name;
  }
}
