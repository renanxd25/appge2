import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OteatroPage } from './oteatro.page';

describe('OteatroPage', () => {
  let component: OteatroPage;
  let fixture: ComponentFixture<OteatroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OteatroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OteatroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
