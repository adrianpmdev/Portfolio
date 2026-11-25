/**
 * appConfig
 *
 * Root application config: routing with view transitions, HTTP,
 * ngx-translate loading the JSON files in public/assets/i18n/ and an
 * initializer that loads the active language before the first render.
 *
 * @author adrianpmdev
 */

import { ApplicationConfig, inject, provideAppInitializer } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from './app.routes';
import { DEFAULT_LANGUAGE } from './core/i18n/language';
import { LanguageSettings } from './core/i18n/language-settings';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideHttpClient(),
    provideTranslateService({
      fallbackLang: DEFAULT_LANGUAGE,
      loader: provideTranslateHttpLoader({
        prefix: './assets/i18n/',
        suffix: '.json',
      }),
    }),
    provideAppInitializer(() => inject(LanguageSettings).initLang()),
  ],
};
