import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationConformationComponent } from './authentication-conformation.component';

describe('AuthenticationConformationComponent', () => {
  let component: AuthenticationConformationComponent;
  let fixture: ComponentFixture<AuthenticationConformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationConformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationConformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
