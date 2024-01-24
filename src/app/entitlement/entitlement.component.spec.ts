import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitlementComponent } from './entitlement.component';

describe('EntitlementComponent', () => {
  let component: EntitlementComponent;
  let fixture: ComponentFixture<EntitlementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntitlementComponent]
    });
    fixture = TestBed.createComponent(EntitlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
