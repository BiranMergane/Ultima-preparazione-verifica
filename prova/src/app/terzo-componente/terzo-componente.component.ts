import { Component } from '@angular/core';
import { QuartoComponent } from '../quarto/quarto.component';

@Component({
  selector: 'app-terzo-componente',
  imports: [QuartoComponent],
  templateUrl: './terzo-componente.component.html',
  styleUrl: './terzo-componente.component.css'
})
export class TerzoComponenteComponent {
parola = 'terzo'
}
