import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsConfirmationComponent } from './tips-confirmation.component';

describe('TipsConfirmationComponent', () => {
  let component: TipsConfirmationComponent;
  let fixture: ComponentFixture<TipsConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
