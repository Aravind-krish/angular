import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPersonHomeComponent } from './delivery-person-home.component';

describe('DeliveryPersonHomeComponent', () => {
  let component: DeliveryPersonHomeComponent;
  let fixture: ComponentFixture<DeliveryPersonHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryPersonHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryPersonHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
