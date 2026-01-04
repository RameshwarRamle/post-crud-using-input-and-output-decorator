import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilddecoratorComponent } from './childdecorator.component';

describe('ChilddecoratorComponent', () => {
  let component: ChilddecoratorComponent;
  let fixture: ComponentFixture<ChilddecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChilddecoratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChilddecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
