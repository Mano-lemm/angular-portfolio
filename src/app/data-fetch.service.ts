import { Injectable } from '@angular/core';
import { Project } from './project';
import { ProgLang } from './prog-lang';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataFetchService {
  private dummyProjects: Project[] = [
    {
      title: 'One',
      link: 'https://google.com',
      last_updated: new Date(Date.now()),
      programming_lan: ProgLang.java,
    },
    {
      title: 'Two',
      link: 'https://youtube.com',
      last_updated: new Date(Date.now()),
      programming_lan: ProgLang.java,
    },
    {
      title: 'Three',
      link: 'https://twitter.com',
      last_updated: new Date(Date.now()),
      programming_lan: ProgLang.java,
    },
    {
      title: 'Four',
      link: 'https://linkedin.com',
      last_updated: new Date(Date.now()),
      programming_lan: ProgLang.java,
    },
    {
      title: 'Five',
      link: 'https://docs.oracle.com/en/java/',
      last_updated: new Date(Date.now()),
      programming_lan: ProgLang.cpp,
    },
  ];
  constructor() {}

  getProjects(): Observable<Project[]> {
    return of(this.dummyProjects);
  }
}
