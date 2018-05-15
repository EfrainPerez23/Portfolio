import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreService } from './service/core.service';
import { ComponentsModule } from '../components/components.module';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    NgbModule.forRoot(),
    ComponentsModule
  ],
  declarations: [
    NavComponent,
    HeaderComponent,
    HomeComponent
  ],
  exports: [HomeComponent, TranslateModule, NgbModule],
  providers: []
})
export class CoreModule { }
