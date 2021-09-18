import { Component, OnInit } from '@angular/core';
import { SampleData } from "../../assets/data/data"

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  constructor() { }
  selectedResult: any = [];
  ngOnInit(): void {
    let record = SampleData.filter(itm => itm.id.toString() == window.location.pathname.split("/details/")[1].toString())
    this.selectedResult = record;
  }
  backToResult = () => window.location.href = "/"
}
