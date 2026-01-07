import { Component, ViewChild } from '@angular/core';
import { Ipost } from './models/interface';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Dialog } from '@angular/cdk/dialog';
import { GetConfirmComponent } from './get-confirm/get-confirm.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _snackbar: MatSnackBar, private dialog:MatDialog) {}


  trackBypostid(index:string, post:Ipost){
    return post.postid
  }


  title = 'PracticeProject';

  msg: string = 'work hard party hard';

  @ViewChild('postform') postform!: NgForm;

  isineditmode: boolean = false;

  postarr: Ipost[] = [
    {
      postitem: 'HTML',
      postid: '1',
    },
    {
      postitem: 'CSS',
      postid: '2',
    },
    {
      postitem: 'JAVASCRIPT',
      postid: '3',
    },
    {
      postitem: 'ANGULAR',
      postid: '4',
    },
  ];

  messagefromchild = '';

  editpostid!: string;

  getmessage(msg: string) {
    this.messagefromchild = msg;
  }

  onSubmit(post: NgForm) {
    let val = { ...post.value, postid: Date.now().toString() };
    this.postarr.push(val);
    post.resetForm();

    this._snackbar.open(`post with id ${val.postid}`, 'close', {
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000,
    });
  }

  onremovefromparent(id: string) {
    const dialogRef = this.dialog.open(GetConfirmComponent, {
      width: '350px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      console.log(result);
      if (result) {
        let getindex = this.postarr.findIndex((p) => p.postid === id);

        this.postarr.splice(getindex, 1);

        this._snackbar.open(
          `post with id ${id} is Removed successfully`,
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

  oneditfromparent(post: Ipost) {
    this.isineditmode = true;

    this.editpostid = post.postid;

    this.postform.form.patchValue({
      postitem: post.postitem,
    });
  }

  onUpdate(form: NgForm) {
    let updateid = this.editpostid;
    let getindex = this.postarr.findIndex((p) => p.postid === updateid);

    if (getindex !== -1) {
      this.postarr[getindex] = { ...this.postarr[getindex], ...form.value };

      this.postform.reset();
      this.isineditmode = false;

      this._snackbar.open(
        `post with id ${updateid} is updated successfully`,
        'close',
        {
          horizontalPosition: 'left',
          verticalPosition: 'top',
          duration: 3000,
        }
      );
    }
  }
}
