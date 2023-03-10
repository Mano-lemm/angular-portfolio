import { Component } from '@angular/core';
import { ProgLang } from '../prog-lang';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  languageTabs: ProgLang[] = Object.values(ProgLang);
  constructor() {}
}
