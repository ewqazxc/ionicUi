import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomtabsPage } from './bottomtabs.page';

describe('BottomtabsPage', () => {
  let component: BottomtabsPage;
  let fixture: ComponentFixture<BottomtabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomtabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomtabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
