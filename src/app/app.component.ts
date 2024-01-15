import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
    <div>
    <app-post-list></app-post-list>
    </div>
  `,
  // styleUrl: ,
  styles: [],
})
export class AppComponent {
  title = 'blogging-platform';
}
