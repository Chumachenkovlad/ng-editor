import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynonymousWidgetComponent } from './synonymous-widget.component';

describe('SynonymousWidgetComponent', () => {
  let component: SynonymousWidgetComponent;
  let fixture: ComponentFixture<SynonymousWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynonymousWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynonymousWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
