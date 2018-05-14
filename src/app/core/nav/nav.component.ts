import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CoreService } from '../service/core.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  private _scrolled: boolean;

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

  public get scrolled(): boolean {
    return this._scrolled;
  }

  public onScroll(id: string): void {
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  private onWindowScroll(): void {
    if (window.pageYOffset > 800) {
      this._scrolled = true;
    } else {
      this._scrolled = false;
    }
  }

}
