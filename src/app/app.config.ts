import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors, withXhr } from '@angular/common/http';
import { loaderInterceptor } from '@interceptors/loader/loader.interceptor';
import { errorInterceptor } from '@interceptors/error/error.interceptor';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

const allowedLangs = ['pl', 'en'];

let savedLang = localStorage.getItem('lang') ?? 'en';

if (!allowedLangs.includes(savedLang)) {
  savedLang = 'en';
  localStorage.setItem('lang', savedLang);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withXhr(), withInterceptors([loaderInterceptor, errorInterceptor])),
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: '/assets/i18n/',
        suffix: '.json',
      }),
      fallbackLang: 'en',
      lang: savedLang,
    }),
  ],
};
