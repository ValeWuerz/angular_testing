import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamJournalComponent } from './dream-journal.component';

describe('DreamJournalComponent', () => {
  let component: DreamJournalComponent;
  let fixture: ComponentFixture<DreamJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DreamJournalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
