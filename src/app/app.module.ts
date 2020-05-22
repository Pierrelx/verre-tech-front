import { ApiInterceptor } from './guards/http.interceptor.guard';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './pages/store/store/store.component';
import { ListComponent } from './pages/store/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentLayoutModule } from '@covalent/core/layout';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CovalentLayoutModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
