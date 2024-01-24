import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkInformationComponent } from './network-information.component';

describe('NetworkInformationComponent', () => {
  let component: NetworkInformationComponent;
  let fixture: ComponentFixture<NetworkInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NetworkInformationComponent]
    });
    fixture = TestBed.createComponent(NetworkInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
