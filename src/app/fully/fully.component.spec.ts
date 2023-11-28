import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullyComponent } from './fully.component';

describe('FullyComponent', () => {
  let component: FullyComponent;
  let fixture: ComponentFixture<FullyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FullyComponent]
    });
    fixture = TestBed.createComponent(FullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
