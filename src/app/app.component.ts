import { Component } from '@angular/core';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
`;

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
