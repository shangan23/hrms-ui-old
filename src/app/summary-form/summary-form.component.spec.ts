import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryFormComponent } from './summary-form.component';

describe('SummaryFormComponent', () => {
  let component: SummaryFormComponent;
  let fixture: ComponentFixture<SummaryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
