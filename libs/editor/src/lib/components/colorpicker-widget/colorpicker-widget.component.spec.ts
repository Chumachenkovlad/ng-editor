import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorpickerWidgetComponent } from './colorpicker-widget.component';

describe('ColorpickerWidgetComponent', () => {
  let component: ColorpickerWidgetComponent;
  let fixture: ComponentFixture<ColorpickerWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorpickerWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorpickerWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
