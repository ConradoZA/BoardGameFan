import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { NotfoundComponent } from './containers/notfound/notfound.component';
import { AdvSearchComponent } from './containers/adv-search/adv-search.component';
import { ProfileComponent } from './containers/user/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { GameDetailComponent } from './containers/game-detail/game-detail.component';
import { LoginComponent } from './containers/user/login/login.component';
import { RegisterComponent } from './containers/user/register/register.component';
import { DesignerComponent } from './containers/designer/designer.component';
import { ArtistComponent } from './containers/artist/artist.component';
import { MechanicComponent } from './containers/mechanic/mechanic.component';
import { CategoryComponent } from './containers/category/category.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"search/:searchValue", component: SearchComponent},
  {path:"advSearch",component:AdvSearchComponent},
  {path:"profile",component:ProfileComponent},
  {path:"detail/:id", component: GameDetailComponent},
  {path:"designer/:id", component: DesignerComponent},
  {path:"mechanic/:id", component: MechanicComponent},
  {path:"category/:id", component: CategoryComponent},
  {path:"artist/:id", component: ArtistComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
