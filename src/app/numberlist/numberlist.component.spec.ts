import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberlistComponent } from './numberlist.component';

describe('NumberlistComponent', () => {
  let component: NumberlistComponent;
  let fixture: ComponentFixture<NumberlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
