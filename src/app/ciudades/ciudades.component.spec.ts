import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CiudadesComponent } from './ciudades.component';

describe('CiudadesComponent', () => {
  let component: CiudadesComponent;
  let fixture: ComponentFixture<CiudadesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CiudadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
