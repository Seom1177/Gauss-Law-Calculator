import { Component } from '@angular/core';

@Component({
  selector: 'app-ley-gauss-carga-neta',
  templateUrl: './ley-gauss-carga-neta.component.html',
  styleUrls: ['./ley-gauss-carga-neta.component.css']
})
export class LeyGaussCargaNetaComponent {
  campoElectrico: number = 0;
  radio: number = 0;
  cargaNeta: number = 0;
  E0 = 8.854 * Math.pow(10, -12);

  calcularCargaNeta(){
    this.cargaNeta = 4 * Math.PI * this.campoElectrico * (this.radio * this.radio) * this.E0;
  }
}
