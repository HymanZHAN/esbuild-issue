import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyListComponent } from './lazy-list.component';

describe('LazyListComponent', () => {
  let component: LazyListComponent;
  let fixture: ComponentFixture<LazyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyListComponent]
    });
    fixture = TestBed.createComponent(LazyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
