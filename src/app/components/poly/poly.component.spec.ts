import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolyComponent } from './poly.component';

describe('PolyComponent', () => {
  let component: PolyComponent;
  let fixture: ComponentFixture<PolyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolyComponent]
    });
    fixture = TestBed.createComponent(PolyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
