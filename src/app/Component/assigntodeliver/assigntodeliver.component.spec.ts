import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigntodeliverComponent } from './assigntodeliver.component';

describe('AssigntodeliverComponent', () => {
  let component: AssigntodeliverComponent;
  let fixture: ComponentFixture<AssigntodeliverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssigntodeliverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigntodeliverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
