import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {  } from '@angular/forms';

import { AppComponent, AppRoute, environment } from './app/';


if (environment.production) {
  enableProdMode();
}

bootstrap
 (
    AppComponent, 
    [
        HTTP_PROVIDERS,
        AppRoute
    ]
 ).catch(err => console.error(err));


