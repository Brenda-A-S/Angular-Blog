import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input()
  cardTitle:string=""
  @Input()
  class:string=""
  @Input()
  link:string=""
  @Input()
  id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
