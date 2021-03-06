import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 @Input() title: string;
 @Input() content: string;
 @Input() loveIts: number;
 @Input() created_at: Date;
 
  
  constructor() { }

  ngOnInit() {
  }
  onAugmenter(){
  this.loveIts++;
  }
  onDiminuer(){
    this.loveIts--;

  }
}
