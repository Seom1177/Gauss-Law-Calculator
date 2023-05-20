import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabViewModule } from 'primeng/tabview';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { LeyGaussCampoElectricoComponent } from './ley-gauss-campo-electrico/ley-gauss-campo-electrico.component';
import { LeyGaussCargaNetaComponent } from './ley-gauss-carga-neta/ley-gauss-carga-neta.component';

@NgModule({
  declarations: [
    AppComponent,
    LeyGaussCampoElectricoComponent,
    LeyGaussCargaNetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    InputNumberModule,
    FormsModule,
    ButtonModule,
    ImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
