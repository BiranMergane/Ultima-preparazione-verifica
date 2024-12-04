import { Component } from '@angular/core';
import { SecondoComponenteComponent } from './secondo-componente/secondo-componente.component';
import { TerzoComponenteComponent } from './terzo-componente/terzo-componente.component';

@Component({
  selector: 'app-root',
  imports: [SecondoComponenteComponent, TerzoComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  parola = 'app';
}
