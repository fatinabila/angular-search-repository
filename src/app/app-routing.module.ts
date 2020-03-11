import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';

const routes: Routes = [
  {path :"" , component : SearchPageComponent},
  {path :"result" , component : SearchResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
