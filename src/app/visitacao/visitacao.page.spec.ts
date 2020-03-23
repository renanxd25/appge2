import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitacaoPage } from './visitacao.page';

describe('VisitacaoPage', () => {
  let component: VisitacaoPage;
  let fixture: ComponentFixture<VisitacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
