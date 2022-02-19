import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpYEduItemComponent } from './exp-y-edu-item.component';

describe('ExpYEduItemComponent', () => {
  let component: ExpYEduItemComponent;
  let fixture: ComponentFixture<ExpYEduItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpYEduItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpYEduItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
