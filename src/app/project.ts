import { ProgLang } from './prog-lang';

export interface Project {
  title: string;
  link: string;
  last_updated: Date;
  programming_lan: ProgLang;
}
