import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { DataFetchService } from '../data-fetch.service';
import { Project } from '../project';

@Component({
  selector: 'app-language-tabs',
  templateUrl: './language-tabs.component.html',
  styleUrls: ['./language-tabs.component.scss'],
})
export class LanguageTabsComponent implements OnInit {
  cur_lang: String = '';
  projects: Project[] = [];

  constructor(
    private route: ActivatedRoute,
    private projectServer: DataFetchService
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe(
      (urls) => (this.cur_lang = urls.map((url) => url.toString())[1])
    );
    this.projectServer
      .getProjects()
      .subscribe((projects) => (this.projects = projects));
  }

  getProjects(): Project[] {
    return this.projects.filter(
      (project) => project.programming_lan == this.cur_lang
    );
  }
}
