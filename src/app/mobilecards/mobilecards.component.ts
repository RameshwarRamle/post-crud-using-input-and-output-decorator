import { Component, OnInit } from '@angular/core';
import { Mobile } from '../models/interface';
import { Input } from '@angular/core';

@Component({
  selector: 'app-mobilecards',
  templateUrl: './mobilecards.component.html',
  styleUrls: ['./mobilecards.component.scss']
})
export class MobilecardsComponent implements OnInit {

  @Input() mobile!:Mobile
  constructor() { }

  ngOnInit(): void {
  }

}
