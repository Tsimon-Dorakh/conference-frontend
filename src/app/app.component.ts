import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { map, Observable } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  links = [
    { title: 'Conferences', path: '/conferences' },
  ];

  constructor(public route: ActivatedRoute,
              public router: Router) {
  }
}
