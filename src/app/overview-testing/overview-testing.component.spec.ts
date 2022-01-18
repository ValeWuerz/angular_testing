import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewTestingComponent } from './overview-testing.component';

describe('OverviewTestingComponent', () => {
  let component: OverviewTestingComponent;
  let fixture: ComponentFixture<OverviewTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
