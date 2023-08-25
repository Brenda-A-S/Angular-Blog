import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-card',
  templateUrl: './side-card.component.html',
  styleUrls: ['./side-card.component.css']
})
export class SideCardComponent implements OnInit {

  @Input()
  class: string = ''
  @Input()
  title: string = ''
  @Input()
  link: string = ''
  @Input()
  button: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
