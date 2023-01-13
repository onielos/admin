import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariedadesProductoComponent } from './variedades-producto.component';

describe('VariedadesProductoComponent', () => {
  let component: VariedadesProductoComponent;
  let fixture: ComponentFixture<VariedadesProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariedadesProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariedadesProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
