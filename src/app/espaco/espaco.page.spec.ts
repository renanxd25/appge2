import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacoPage } from './espaco.page';

describe('EspacoPage', () => {
  let component: EspacoPage;
  let fixture: ComponentFixture<EspacoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspacoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
