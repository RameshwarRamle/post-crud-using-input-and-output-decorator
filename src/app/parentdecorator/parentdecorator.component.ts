import { Component, OnInit } from '@angular/core';
import { Mobile, Movie, Post } from '../models/interface';
import { movies } from '../models/components/movies';
import { mobiles } from '../models/components/mobile';
import { posts } from '../models/components/posts';


@Component({
  selector: 'app-parentdecorator',
  templateUrl: './parentdecorator.component.html',
  styleUrls: ['./parentdecorator.component.scss']
})
export class ParentdecoratorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  moviesarr:Movie[] = movies

  mobilesarr:Mobile[] = mobiles

  postsarr:Post[] = posts

}
