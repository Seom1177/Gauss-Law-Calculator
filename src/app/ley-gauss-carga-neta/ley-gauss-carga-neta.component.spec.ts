import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyGaussCargaNetaComponent } from './ley-gauss-carga-neta.component';

describe('LeyGaussCargaNetaComponent', () => {
  let component: LeyGaussCargaNetaComponent;
  let fixture: ComponentFixture<LeyGaussCargaNetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeyGaussCargaNetaComponent]
    });
    fixture = TestBed.createComponent(LeyGaussCargaNetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
