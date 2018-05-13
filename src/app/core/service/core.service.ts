import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  private languageChanged: Subject<void> = new Subject<void>();

  public constructor() { }

  public getLanguageChanged(): Subject<void> {
    return this.languageChanged;
  }
}
