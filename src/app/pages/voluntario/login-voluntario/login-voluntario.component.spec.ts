import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginVoluntarioComponent } from './login-voluntario.component';

describe('LoginVoluntarioComponent', () => {
  let component: LoginVoluntarioComponent;
  let fixture: ComponentFixture<LoginVoluntarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginVoluntarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
