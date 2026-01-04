import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Mobile, Movie } from '../models/interface';

@Component({
  selector: 'app-input-decorator',
  templateUrl: './input-decorator.component.html',
  styleUrls: ['./input-decorator.component.scss']
})
export class InputDecoratorComponent implements OnInit {
 @Input() getmsgfromparent !:string


  constructor() { }

  selectedSkill:string = "html"

  ngOnInit(): void {
  }

 


}
