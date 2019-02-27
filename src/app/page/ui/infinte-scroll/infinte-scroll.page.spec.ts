import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinteScrollPage } from './infinte-scroll.page';

describe('InfinteScrollPage', () => {
  let component: InfinteScrollPage;
  let fixture: ComponentFixture<InfinteScrollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfinteScrollPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfinteScrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
