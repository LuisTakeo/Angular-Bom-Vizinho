import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIdosoComponent } from './home-idoso.component';

describe('HomeIdosoComponent', () => {
  let component: HomeIdosoComponent;
  let fixture: ComponentFixture<HomeIdosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeIdosoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeIdosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
