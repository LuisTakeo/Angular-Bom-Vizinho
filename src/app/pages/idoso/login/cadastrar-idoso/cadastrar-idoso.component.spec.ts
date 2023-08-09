import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarIdosoComponent } from './cadastrar-idoso.component';

describe('CadastrarIdosoComponent', () => {
  let component: CadastrarIdosoComponent;
  let fixture: ComponentFixture<CadastrarIdosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarIdosoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarIdosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
