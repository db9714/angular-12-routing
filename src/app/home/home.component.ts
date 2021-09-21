import { Component, OnInit } from '@angular/core';
import { SampleData } from "../../assets/data/data"
import { Router } from '@angular/router';
import { GetData } from '../shared/services/getData.service';
import { AppState } from '../shared/services/app-state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private getData: GetData,
    private state: AppState,

  ) { }
  searchKeyword: any = "";
  searchResults: any = [];
  ngOnInit() {
    this.getData.getSearchData(SampleData).subscribe(
      (data) => {
        this.searchResults = data;
        if (this.state.searchKeyword !== "") {
          this.searchKeyword = this.state.searchKeyword;
          this.searchResults = this.searchResults.filter((record: { name: string; }) => record.name.toLowerCase().includes(this.searchKeyword.toLowerCase()))
        } else this.searchResults = data
      })

  }
  searchData = () => {
    let filteredDate = SampleData.filter(record => record.name.toLowerCase().includes(this.searchKeyword.toLowerCase()))
    this.searchResults = filteredDate;
    if (this.searchKeyword !== undefined) this.state.searchKeyword = this.searchKeyword;
  }
  navigateToDetails = (itm: any) => this.router.navigate(["/details/" + itm.id])

}
