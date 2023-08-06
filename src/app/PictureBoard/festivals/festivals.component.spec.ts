import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalsComponent } from './festivals.component';

describe('FestivalsComponent', () => {
  let component: FestivalsComponent;
  let fixture: ComponentFixture<FestivalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FestivalsComponent]
    });
    fixture = TestBed.createComponent(FestivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
