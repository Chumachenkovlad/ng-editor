import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorpickerDialogComponent } from './colorpicker-dialog.component';

describe('ColorpickerDialogComponent', () => {
  let component: ColorpickerDialogComponent;
  let fixture: ComponentFixture<ColorpickerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorpickerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorpickerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
