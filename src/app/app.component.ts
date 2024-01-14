import { Component } from '@angular/core';
import { GlobalStyle } from './styles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
    <div>
      <router-outlet></router-outlet>
      <GlobalStyle />
    </div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'blogging-platform';
}
