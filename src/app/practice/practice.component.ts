import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent implements OnInit {
  constructor(private dialog: MatDialog,  private snackBar:MatSnackBar ) {}

  ngOnInit(): void {}

  isineditmode: boolean = false;
  @ViewChild('fname') fname!: ElementRef;
  @ViewChild('lname') lname!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;
  @ViewChild('city') city!: ElementRef;

  edit_id!: string;

  users = [
    {
      id: '1',
      fname: 'Rameshwar',
      lname: 'Ramle',
      email: 'rameshwar@gmail.com',
      contact: '9169856381',
      city: 'Pune',
    },
    {
      id: '2',
      fname: 'Amit',
      lname: 'Sharma',
      email: 'amit.sharma@gmail.com',
      contact: '9876543210',
      city: 'Mumbai',
    },
    {
      id: '3',
      fname: 'Priya',
      lname: 'Patil',
      email: 'priya.patil@gmail.com',
      contact: '9123456789',
      city: 'Nanded',
    },
    {
      id: '4',
      fname: 'Neha',
      lname: 'Verma',
      email: 'neha.verma@gmail.com',
      contact: '9988776655',
      city: 'Nagpur',
    },
  ];

  clearform(): void {
    this.fname.nativeElement.value = '';
    this.lname.nativeElement.value = '';
    this.email.nativeElement.value = '';
    this.contact.nativeElement.value = '';
    this.city.nativeElement.value = '';
  }

  onSubmit() {
    if (this.fname.nativeElement.value.length > 0) {
      let new_user = {
        fname: this.fname.nativeElement.value,
        lname: this.lname.nativeElement.value,
        email: this.email.nativeElement.value,
        contact: this.contact.nativeElement.value,
        city: this.city.nativeElement.value,
        id: Date.now().toString(),
      };
      this.users.push(new_user);

      this.clearform();

      this.snackBar.open(`User with id ${new_user.id} Created successfully`, "close", {
        duration:3000
      })
    }
  }


  
  onRemove(id: string) {
    const dialogRef = this.dialog.open(GetConfirmComponent, {
      width: '500px',
      disableClose:true
    });
    dialogRef.afterClosed().subscribe((res : boolean) => {
      if (res) {
        let getindex = this.users.findIndex((r) => r.id === id);
        this.users.splice(getindex, 1);

        this.snackBar.open(`User with id ${id} Removed Successfully`, "close", {
          duration:3000
        })
      }
    });
  }



  onEdit(obj: any) {
    this.fname.nativeElement.value = obj.fname;
    this.lname.nativeElement.value = obj.lname;
    this.email.nativeElement.value = obj.email;
    this.contact.nativeElement.value = obj.contact;
    this.city.nativeElement.value = obj.city;
    this.isineditmode = true;
    this.edit_id = obj.id;
  }

  onUpdate() {
    let update_obj = {
      fname: this.fname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: this.contact.nativeElement.value,
      city: this.city.nativeElement.value,
      id: this.edit_id,
    };

    this.clearform();

    this.users.map((r) =>
      r.id === this.edit_id ? Object.assign(r, update_obj) : null
    );
    this.isineditmode = false;

    this.snackBar.open(`User with id ${this.edit_id} is Updated successfully`, "close", {
      duration:3000
    })
  }
}
