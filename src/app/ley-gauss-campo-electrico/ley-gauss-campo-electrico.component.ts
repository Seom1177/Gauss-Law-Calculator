import { Component } from '@angular/core';

@Component({
  selector: 'app-ley-gauss-campo-electrico',
  templateUrl: './ley-gauss-campo-electrico.component.html',
  styleUrls: ['./ley-gauss-campo-electrico.component.css']
})
export class LeyGaussCampoElectricoComponent {
  campoElectrico: number = 0;
  radio: number = 0;
  cargaNeta: number = 0;
  potenciaCampoElectrico: number = -9;
  E0 = 8.854 * Math.pow(10, -12);

  calcularCampoElectrico(){
    this.campoElectrico = 
      (this.cargaNeta * Math.pow(10, this.potenciaCampoElectrico)) 
      / 
      (4 * Math.PI * (this.radio * this.radio) * this.E0);
  }
}
