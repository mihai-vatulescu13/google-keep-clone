import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawNoteComponent } from './draw-note.component';

describe('DrawNoteComponent', () => {
  let component: DrawNoteComponent;
  let fixture: ComponentFixture<DrawNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
