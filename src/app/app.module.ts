import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ MatButtonModule } from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import{MatDividerModule} from '@angular/material/divider';
import { PracticeComponent } from './practice/practice.component';
import { GetConfirmComponent } from './get-confirm/get-confirm.component';
import { MatDialogModule } from '@angular/material/dialog';
import{MatCardModule} from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomecardsComponent } from './homecards/homecards.component';
import { FormsModule } from '@angular/forms';
import { InputDecoratorComponent } from './input-decorator/input-decorator.component';
import { ParentdecoratorComponent } from './parentdecorator/parentdecorator.component';
import { ChilddecoratorComponent } from './childdecorator/childdecorator.component';
import { MobilecardsComponent } from './mobilecards/mobilecards.component';
import { CrudTodoStudentComponent } from './crud-todo-student/crud-todo-student.component';
import { FormComponent } from './form/form.component';
import { InputOutputComponent } from './input-output/input-output.component';


@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    GetConfirmComponent,
    HomecardsComponent,
    InputDecoratorComponent,
    ParentdecoratorComponent,
    ChilddecoratorComponent,
    MobilecardsComponent,
    CrudTodoStudentComponent,
    FormComponent,
    InputOutputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatCardModule,
    MatSnackBarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
