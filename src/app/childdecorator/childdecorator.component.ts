import { Component, OnInit } from '@angular/core';
import { Movie, Post } from '../models/interface';
import { Input } from '@angular/core';

@Component({
  selector: 'app-childdecorator',
  templateUrl: './childdecorator.component.html',
  styleUrls: ['./childdecorator.component.scss']
})
export class ChilddecoratorComponent implements OnInit {

  @Input() movie!:Movie
  @Input() post!:Post
  
  constructor() { }

  ngOnInit(): void {
  }




}
