import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoupComponent } from './goup.component';

describe('GoupComponent', () => {
  let component: GoupComponent;
  let fixture: ComponentFixture<GoupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
