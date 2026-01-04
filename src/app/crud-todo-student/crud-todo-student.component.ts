import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo, Istudent } from '../models/interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Dialog } from '@angular/cdk/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-crud-todo-student',
  templateUrl: './crud-todo-student.component.html',
  styleUrls: ['./crud-todo-student.component.scss'],
})
export class CrudTodoStudentComponent implements OnInit {
  isineditmode: boolean = false;

  todoarr: Itodo[] = [
    {
      todoitem: 'html',
      todoid: '123',
    },
    {
      todoitem: 'css',
      todoid: '1234',
    },
    {
      todoitem: 'javascript',
      todoid: '12345',
    },
  ];

  stdarr: Istudent[] = [
    {
      fname: 'Rahul',
      lname: 'KL',
      email: 'rahul@gmail.com',
      contact: 9876543210,
      id: '1',
    },
    {
      fname: 'viral',
      lname: 'Kohli',
      email: 'virat@gmail.com',
      contact: 9546543210,
      id: '2',
    },
    {
      fname: 'mahendra',
      lname: 'dhoni',
      email: 'mahendra@gmail.com',
      contact: 9871243210,
      id: '3',
    },
  ];

  editid!: string;
  stdeditid!: string;

  @ViewChild('todoitem') todoitem!: ElementRef;
  @ViewChild('fname') fname!: ElementRef;
  @ViewChild('lname') lname!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;

  constructor(private _snackbar: MatSnackBar,  private dialog:MatDialog) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.todoitem.nativeElement.value.length > 0) {
      let todo_obj = {
        todoitem: this.todoitem.nativeElement.value,
        todoid: Date.now().toString(),
      };

      this.todoitem.nativeElement.value = '';

      this.todoarr.push(todo_obj);

      this._snackbar.open(
          `The Student with id ${todo_obj.todoid} is created successfully`,
          'close',
          {
            horizontalPosition: 'left',
            verticalPosition: 'top',
            duration: 3000,
          }
        );
    }
  }

  onRemove(id: string) {
    const dialogRef = this.dialog.open(GetConfirmComponent, {
      width: '350px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      console.log(result);
      if (result) {
        let getindex = this.todoarr.findIndex((t) => t.todoid === id);
        this.todoarr.splice(getindex, 1);

        this._snackbar.open(
          `The Student with id ${id} is Removed successfully`,
          'close',
          {
            horizontalPosition: 'left',
            verticalPosition: 'top',
            duration: 3000,
          }
        );
      }
    });
  }



  onEdit(todo: Itodo) {
    this.todoitem.nativeElement.value = todo.todoitem;
    this.editid = todo.todoid;

    this.isineditmode = true;
  }



  onUpdate() {
    let updated_obj: Itodo = {
      todoitem: this.todoitem.nativeElement.value,
      todoid: this.editid,
    };

    let getindex = this.todoarr.findIndex((t) => t.todoid === this.editid);
    this.todoarr[getindex] = updated_obj;
    this.isineditmode = false;

    this.todoitem.nativeElement.value = '';

    this._snackbar.open(
          `The Student with id ${this.editid} is updated successfully`,
          'close',
          {
            horizontalPosition: 'left',
            verticalPosition: 'top',
            duration: 3000,
          }
        );
  }







  // student crud
  onSubmitstudent() {
    if (this.fname.nativeElement.value.length > 0) {
      let std_obj = {
        fname: this.fname.nativeElement.value,
        lname: this.lname.nativeElement.value,
        email: this.email.nativeElement.value,
        contact: this.contact.nativeElement.value,
        id: Date.now().toString(),
      };

      this.stdarr.push(std_obj);
      this._snackbar.open(
          `The Student with id ${std_obj.id} is created successfully`,
          'close',
          {
            horizontalPosition: 'left',
            verticalPosition: 'top',
            duration: 3000,
          }
        );
    }
  }




  onRemovestudent(id: string) {
    const dialogRef = this.dialog.open(GetConfirmComponent, {
      width: '350px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      console.log(result);
      if (result) {
            let getindex = this.stdarr.findIndex((t) => t.id === id);
            this.stdarr.splice(getindex, 1);
        this._snackbar.open(
          `The Student with id ${id} is Removed successfully`,
          'close',
          {
            horizontalPosition: 'left',
            verticalPosition: 'top',
            duration: 3000,
          }
        );
      }
    });
   
  }



  onEditstudent(std: Istudent) {
    this.stdeditid = std.id;
    this.fname.nativeElement.value = std.fname;
    this.lname.nativeElement.value = std.lname;
    this.email.nativeElement.value = std.email;
    this.contact.nativeElement.value = std.contact;

    this.isineditmode = true;
  }

  onUpdatestudent() {
    let update_std: Istudent = {
      fname: this.fname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: this.contact.nativeElement.value,
      id: this.stdeditid,
    };

    let getindex = this.stdarr.findIndex((s) => s.id === this.stdeditid);
    this.stdarr[getindex] = update_std;

    this.isineditmode = false;

    this.fname.nativeElement.value = '';
    this.lname.nativeElement.value = '';
    this.email.nativeElement.value = '';
    this.contact.nativeElement.value = '';

    this._snackbar.open(
          `The Student with id ${update_std.id} is updated successfully`,
          'close',
          {
            horizontalPosition: 'left',
            verticalPosition: 'top',
            duration: 3000,
          }
        );
  }
}
