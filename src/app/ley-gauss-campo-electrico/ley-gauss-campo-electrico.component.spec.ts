import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyGaussCampoElectricoComponent } from './ley-gauss-campo-electrico.component';

describe('LeyGaussCampoElectricoComponent', () => {
  let component: LeyGaussCampoElectricoComponent;
  let fixture: ComponentFixture<LeyGaussCampoElectricoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeyGaussCampoElectricoComponent]
    });
    fixture = TestBed.createComponent(LeyGaussCampoElectricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
