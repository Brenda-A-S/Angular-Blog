import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string=""
  cardTitle:string=""
  cardDescription:string=""
  link:any=""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get("id"))
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const data = dataFake.projects
    const result = data.filter(article => article.id == id )[0]

    this.cardTitle = result.title
    this.cardDescription = result.description
    this.photoCover = result.photo
    this.link = result.link

}}
