import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarVoluntarioComponent } from './cadastrar-voluntario.component';

describe('CadastrarVoluntarioComponent', () => {
  let component: CadastrarVoluntarioComponent;
  let fixture: ComponentFixture<CadastrarVoluntarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarVoluntarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
