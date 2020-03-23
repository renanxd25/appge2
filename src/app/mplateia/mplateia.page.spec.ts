import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MplateiaPage } from './mplateia.page';

describe('MplateiaPage', () => {
  let component: MplateiaPage;
  let fixture: ComponentFixture<MplateiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MplateiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MplateiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
