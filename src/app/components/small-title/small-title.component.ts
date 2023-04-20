import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-title',
  templateUrl: './small-title.component.html',
  styleUrls: ['./small-title.component.css', './small-title.responsive.component.css']
})
export class SmallTitleComponent implements OnInit {

  @Input()
  title:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
