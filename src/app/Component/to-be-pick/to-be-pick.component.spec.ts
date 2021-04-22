import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToBePickComponent } from './to-be-pick.component';

describe('ToBePickComponent', () => {
  let component: ToBePickComponent;
  let fixture: ComponentFixture<ToBePickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToBePickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToBePickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
