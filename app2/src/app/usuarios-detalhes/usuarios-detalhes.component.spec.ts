import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosDetalhesComponent } from './usuarios-detalhes.component';

describe('UsuariosDetalhesComponent', () => {
  let component: UsuariosDetalhesComponent;
  let fixture: ComponentFixture<UsuariosDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
