import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicboardComponent } from './picboard.component';

describe('PicboardComponent', () => {
  let component: PicboardComponent;
  let fixture: ComponentFixture<PicboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PicboardComponent]
    });
    fixture = TestBed.createComponent(PicboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
