import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDotPagination } from './custom-dot-pagination';

describe('CustomDotPagination', () => {
  let component: CustomDotPagination;
  let fixture: ComponentFixture<CustomDotPagination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomDotPagination]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDotPagination);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
