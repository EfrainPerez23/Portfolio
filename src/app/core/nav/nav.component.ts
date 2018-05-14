import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CoreService } from '../service/core.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public constructor(private translate: TranslateService, private coreService: CoreService) {
    translate.setDefaultLang('en');
  }

  public switchLanguage(language: string): void {
    this.translate.use(language);
    this.coreService.getLanguageChanged().next();
  }

  public ngOnInit(): void {
    this.coreService.getLanguageChanged().next();
  }

}
