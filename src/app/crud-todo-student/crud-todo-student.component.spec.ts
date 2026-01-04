import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTodoStudentComponent } from './crud-todo-student.component';

describe('CrudTodoStudentComponent', () => {
  let component: CrudTodoStudentComponent;
  let fixture: ComponentFixture<CrudTodoStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudTodoStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudTodoStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
