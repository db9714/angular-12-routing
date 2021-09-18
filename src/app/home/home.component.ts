import { Component, OnInit } from '@angular/core';
import { SampleData } from "../../assets/data/data"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  searchKeyword: any = "";
  searchResults: any = [];
  ngOnInit() {
    if (localStorage.getItem("keyword")?.toString() !== "") {
      this.searchKeyword = localStorage.getItem("keyword")?.toString();
      let filteredDate = SampleData.filter(record => record.name.toLowerCase().includes(this.searchKeyword.toLowerCase()))
      this.searchResults = filteredDate;
    } else this.searchResults = SampleData

  }
  searchData = () => {
    let filteredDate = SampleData.filter(record => record.name.toLowerCase().includes(this.searchKeyword.toLowerCase()))
    this.searchResults = filteredDate;
    if (this.searchKeyword !== undefined) localStorage.setItem("keyword", this.searchKeyword)
  }
  navigateToDetails = (itm: any) => window.location.href = "/details/" + itm.id

}
