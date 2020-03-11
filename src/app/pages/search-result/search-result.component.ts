import { Component, OnInit , ViewChild } from '@angular/core';
import { SearchService } from "../../services/search.service";
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @ViewChild('f', { static: false }) key_word: NgForm;

  constructor(private  searchService:  SearchService) { }

  total_result;

  ngOnInit() {

    let data = this.searchService.get_filtered_data();

    this.bind_data(data)
  }

  bind_data (data){

    this.total_result=data[0].total;

    console.log(data)

  }

  onSubmit (){

    this.searchService.getResult(this.key_word.value.keyword);

  }

}
