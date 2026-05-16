import { Component, inject } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { TranslateService } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-lang-switcher',
  imports: [MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: './lang-switcher.component.html',
  styleUrls: ['./lang-switcher.component.scss'],
})
export class LangSwitcherComponent {
  private translate = inject(TranslateService);

  langs = [
    { code: 'pl', label: 'Polski' },
    { code: 'en', label: 'English' },
  ];

  current = this.translate.getCurrentLang() || localStorage.getItem('lang') || 'en';

  get currentLabel() {
    return this.langs.find(l => l.code === this.current)?.label;
  }

  switch(lang: string) {
    this.current = lang;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
