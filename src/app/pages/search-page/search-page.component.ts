import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import { SearchService } from '../../services/search.service'


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  @ViewChild('f', { static: false }) key_word: NgForm;

  result= []

  constructor(private search: SearchService) { }

  ngOnInit() {
  }

  onSubmit (){

    this.search.getResult(this.key_word.value.keyword);

  }

 
}
