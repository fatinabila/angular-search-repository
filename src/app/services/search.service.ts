import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  constructor(private _http:HttpClient,  private router:Router ) { }

  filtered_result=[ {total : "", items :[]}];

  getResult(keyword : string){

    let query = 'https://api.github.com/search/repositories?q="'+keyword+'"';

    this._http.get(query).subscribe(
      data => { 
        
        this.filter_data(data);
        
        this.router.navigate(['/result']);

      },
      
      err => {console.error(err)}

      );  

  }

  filter_data(data){
 
    console.log(data)



    this.filtered_result[0].total = data.total_count;

    for(let i =0 ; i < data.items.length ; i++){
      this.filtered_result[0].items.push({
        title : data.items[i].full_name,
        desc : data.items[i].description,
        language : data.items[i].language,
        stars : data.items[i].stargazers_count,
        last_update :data.items[i].updated_at,
        repo_url : data.items[i].svn_url
      });
    }

    return this.filtered_result;

  }

  get_filtered_data (){
    return this.filtered_result;
  }



}
