import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SampleData } from "../../assets/data/data"

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  constructor(private router: Router,) { }
  selectedResult: any = [];
  ngOnInit(): void {
    let record = SampleData.filter(itm => itm.id.toString() == window.location.pathname.split("/details/")[1].toString())
    this.selectedResult = record;
  }
  backToResult = () => this.router.navigate(["/"])
}
