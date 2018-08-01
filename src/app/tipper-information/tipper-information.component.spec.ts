import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipperInformationComponent } from './tipper-information.component';

describe('TipperInformationComponent', () => {
  let component: TipperInformationComponent;
  let fixture: ComponentFixture<TipperInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipperInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipperInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
