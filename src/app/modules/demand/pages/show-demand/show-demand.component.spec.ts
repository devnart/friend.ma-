import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDemandComponent } from './show-demand.component';

describe('ShowDemandComponent', () => {
  let component: ShowDemandComponent;
  let fixture: ComponentFixture<ShowDemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDemandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
