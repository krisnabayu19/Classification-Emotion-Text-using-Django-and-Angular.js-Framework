import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckemotionComponent } from './checkemotion.component';

describe('CheckemotionComponent', () => {
  let component: CheckemotionComponent;
  let fixture: ComponentFixture<CheckemotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckemotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckemotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
