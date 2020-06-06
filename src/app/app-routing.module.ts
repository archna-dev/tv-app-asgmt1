import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TvAppComponent } from './tv-app/tv-app.component';
import { TvShowSearchComponent } from './tv-show-search/tv-show-search.component';



const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'shows', component: TvAppComponent},
  {path: 'TvshowSearch', component:TvShowSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
