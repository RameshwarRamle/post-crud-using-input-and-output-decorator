import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { Ipost, Itodo } from '../models/interface';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {

  

  @Input() post!:Ipost
  constructor() { }

  ngOnInit(): void {
  }

  @Output() sendmsg = new EventEmitter<string>()

  @Output() removepost=new EventEmitter<string>()

  @Output() editpost = new EventEmitter<Ipost>()

  sendtoparent(){
    this.sendmsg.emit("hello from angular @output decorator")
  }

  onRemove(id:string){
    this.removepost.emit(id)
  }

  onEdit(){
    this.editpost.emit(this.post)
  }
}
