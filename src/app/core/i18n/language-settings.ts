/**
 * LanguageSettings
 *
 * Resolves the initial language, loads it before the app renders, changes it
 * and persists the user's choice.
 *
 * @author adrianpmdev
 */

import { DOCUMENT, Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, catchError, of } from 'rxjs';
import { DEFAULT_LANGUAGE, Language, isLanguage } from './language';

@Injectable({ providedIn: 'root' })
export class LanguageSettings {
  private readonly translate = inject(TranslateService);
  private readonly document = inject(DOCUMENT);

  private readonly storageKey = 'lang';
  private readonly currentLangState = signal<Language>(this.resolveInitialLang());

  readonly currentLang = this.currentLangState.asReadonly();

  initLang(): Observable<unknown> {
    return this.setLang(this.currentLang()).pipe(catchError(() => of(null)));
  }

  setLang(lang: Language): Observable<unknown> {
    this.currentLangState.set(lang);
    localStorage.setItem(this.storageKey, lang);
    this.document.documentElement.lang = lang;
    return this.translate.use(lang);
  }

  private resolveInitialLang(): Language {
    const stored = localStorage.getItem(this.storageKey);
    if (isLanguage(stored)) return stored;

    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    return isLanguage(browserLang) ? browserLang : DEFAULT_LANGUAGE;
  }
}
