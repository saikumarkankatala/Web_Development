import { Component } from '@angular/core';

@Component({
  selector: 'app-post-comp',
  templateUrl: './post-comp.component.html',
  styleUrls: ['./post-comp.component.css']
})
export class PostCompComponent {
tt : string ='';
str: string[] = [];
add(){
  if(this.tt){
    this.str.unshift(this.tt);
    this.tt='';
  }
} 
}
