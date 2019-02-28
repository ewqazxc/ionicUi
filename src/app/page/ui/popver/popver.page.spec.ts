import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopverPage } from './popver.page';

describe('PopverPage', () => {
  let component: PopverPage;
  let fixture: ComponentFixture<PopverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
