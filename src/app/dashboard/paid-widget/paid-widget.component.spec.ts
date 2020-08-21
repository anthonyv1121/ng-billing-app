import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidWidgetComponent } from './paid-widget.component';

describe('PaidWidgetComponent', () => {
  let component: PaidWidgetComponent;
  let fixture: ComponentFixture<PaidWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
