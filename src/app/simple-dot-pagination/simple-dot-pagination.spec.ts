import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDotPagination } from './simple-dot-pagination';

describe('SimpleDotPagination', () => {
  let component: SimpleDotPagination;
  let fixture: ComponentFixture<SimpleDotPagination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleDotPagination]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleDotPagination);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
