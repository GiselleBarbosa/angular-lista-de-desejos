import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule],
  template: ` <p-button label="Submit"></p-button> `,
})
export class HeaderComponent {}
