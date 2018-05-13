import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  public switchLanguage(language: string): void {
    this.translate.use(language);
  }

  public ngOnInit(): void { }

}
