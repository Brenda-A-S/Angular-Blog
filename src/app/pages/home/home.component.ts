import { Component, OnInit } from '@angular/core';
import {dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './ids.css']
})
export class HomeComponent implements OnInit {
  projects = dataFake.projects
  photoCover:string=""
  cardTitle:string=""
  cardDescription:string=""
  link:any=""
  articles:any=[]
  id:string | null = "1"
  constructor() { }
  ngOnInit(): void {
    this.setValuesToComponent("1")
  }    
  setValuesToComponent(id:string | null){
    const data = dataFake.projects
    const articles = dataFake.articles
    const result = data.filter(article => article.id == "1")[0]
    this.cardTitle = result.title
    this.cardDescription = result.description
    this.photoCover = result.photo
    this.link = result.link
    this.articles = articles
}}