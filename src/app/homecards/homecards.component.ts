import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Home } from '../models/interface';
import { homes } from '../models/components/homes';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-homecards',
  templateUrl: './homecards.component.html',
  styleUrls: ['./homecards.component.scss'],
})
export class HomecardsComponent implements OnInit {
  constructor(private _snackbar:MatSnackBar) {}

  ngOnInit(): void {}

  isinEditMode: boolean = false;

  homesarr: Home[] = homes;

  @ViewChild('title') title!: ElementRef;
  @ViewChild('location') location!: ElementRef;
  @ViewChild('price') price!: ElementRef;
  @ViewChild('beds') beds!: ElementRef;
  @ViewChild('baths') baths!: ElementRef;
  @ViewChild('area') area!: ElementRef;
  @ViewChild('type') type!: ElementRef;
  @ViewChild('status') status!: ElementRef;
  @ViewChild('description') description!: ElementRef;
  @ViewChild('image') image!: ElementRef;

  showForm = false;
  toggleForm() {
    this.showForm = !this.showForm;
  }

  id = Date.now()
  onSubmit() {
    if (this.title.nativeElement.value.length > 0) {
      let home_obj: Home = {
        title: this.title.nativeElement.value,
        location: this.location.nativeElement.value,
        price: this.price.nativeElement.value,
        beds: this.beds.nativeElement.value,
        baths: this.baths.nativeElement.value,
        area: this.area.nativeElement.value,
        type: this.type.nativeElement.value,
        status: this.status.nativeElement.value,
        description: this.description.nativeElement.value,
        image: this.image.nativeElement.value,
        id:this.id,
      };

      this.homesarr.unshift(home_obj);
      this._snackbar.open(`Home with id ${this.id} is created successfully`, "close", {
        horizontalPosition:"left",
        verticalPosition:"top",
        duration:3000
      })
    }
  }


  onRemove(id:number){
    let getindex = this.homesarr.findIndex((h) => h.id === id)

    this.homesarr.splice(getindex, 1)

    this._snackbar.open(`Home with id ${id} is deleted successfully`, "close", {
      horizontalPosition:"left",
      verticalPosition:"top",
      duration:3000
    })
  }

}
