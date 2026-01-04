import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilecardsComponent } from './mobilecards.component';

describe('MobilecardsComponent', () => {
  let component: MobilecardsComponent;
  let fixture: ComponentFixture<MobilecardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilecardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
