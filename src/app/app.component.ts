import { Component } from '@angular/core';
import { GlobalStyle } from './styles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
    <div>
    <app-post-list></app-post-list>
    </div>
  `,
  // styleUrl: ,
  styles: [GlobalStyle],
})
export class AppComponent {
  title = 'blogging-platform';
}
