import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDropDownComponent } from './simple-drop-down.component';

describe('SimpleDropDownComponent', () => {
  let component: SimpleDropDownComponent;
  let fixture: ComponentFixture<SimpleDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleDropDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
