import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AdvSearchComponent } from './containers/adv-search/adv-search.component';
import { ProfileComponent } from './containers/user/profile/profile.component';
import { ResultsComponent } from './components/results/results.component';
import { GameDetailComponent } from './containers/game-detail/game-detail.component';
import { LoginComponent } from './containers/user/login/login.component';
import { RegisterComponent } from './containers/user/register/register.component';
import { TableComponent } from './components/table/table.component';
import { LegalComponent } from './components/legal/legal.component';
import { ConfirmedComponent } from './containers/user/confirmed/confirmed.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { WhoAmIComponent } from './components/who-am-i/who-am-i.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"search/game/:searchValue", component: ResultsComponent},
  {path:"search/year/:searchValue", component: ResultsComponent},
  {path:"search/minPlayers/:searchValue", component: ResultsComponent},
  {path:"search/maxPlayers/:searchValue", component: ResultsComponent},
  {path:"search/players/:searchValue", component: ResultsComponent},
  {path:"search/minTime/:searchValue", component: ResultsComponent},
  {path:"search/maxTime/:searchValue", component: ResultsComponent},
  {path:"search/time/:searchValue", component: ResultsComponent},
  {path:"search/age/:searchValue", component: ResultsComponent},
  {path:"advSearch",component:AdvSearchComponent},
  {path:"profile",component:ProfileComponent},
  {path:"detail/:id", component: GameDetailComponent},
  {path:"designer/:id", component: TableComponent},
  {path:"mechanic/:id", component: TableComponent},
  {path:"category/:id", component: TableComponent},
  {path:"artist/:id", component: TableComponent},
  {path:"legal", component: LegalComponent},
  {path:"aboutme", component: WhoAmIComponent},
  {path:"tech", component: TechnologiesComponent},
  {path:"confirmed/:token", component: ConfirmedComponent},
  {path:"recover/:token", component:RecoverPasswordComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
