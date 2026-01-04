import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentdecoratorComponent } from './parentdecorator.component';

describe('ParentdecoratorComponent', () => {
  let component: ParentdecoratorComponent;
  let fixture: ComponentFixture<ParentdecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentdecoratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentdecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
