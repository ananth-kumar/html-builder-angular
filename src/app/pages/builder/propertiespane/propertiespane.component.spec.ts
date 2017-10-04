import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiespaneComponent } from './propertiespane.component';

describe('PropertiespaneComponent', () => {
  let component: PropertiespaneComponent;
  let fixture: ComponentFixture<PropertiespaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiespaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiespaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
