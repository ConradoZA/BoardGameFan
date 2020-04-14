import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule, MatPaginatorIntl} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './containers/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AdvSearchComponent } from './containers/adv-search/adv-search.component';
import { ProfileComponent } from './containers/user/profile/profile.component';
import { ResultsComponent } from './components/results/results.component';
import { GameDetailComponent } from './containers/game-detail/game-detail.component';
import { LoginComponent } from './containers/user/login/login.component';
import { RegisterComponent } from './containers/user/register/register.component';
import { TableComponent } from './components/table/table.component';
import { getSpanishPaginatorIntl } from './esp-paginator-intl';
import { BasicComponent } from './components/searches/basic/basic.component';
import { ByNameComponent } from './components/searches/by-name/by-name.component';
import { ByTimeComponent } from './components/searches/by-time/by-time.component';
import { ByPlayersComponent } from './components/searches/by-players/by-players.component';
import { ByYearComponent } from './components/searches/by-year/by-year.component';
import { ByAgeComponent } from './components/searches/by-age/by-age.component';
import { LegalComponent } from './components/legal/legal.component';
import { DataComponent } from './containers/user/data/data.component';
import { CollectionComponent } from './containers/user/collection/collection.component';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotfoundComponent,
    AdvSearchComponent,
    ProfileComponent,
    ResultsComponent,
    GameDetailComponent,
    LoginComponent,
    RegisterComponent,
    TableComponent,
    BasicComponent,
    ByNameComponent,
    ByTimeComponent,
    ByPlayersComponent,
    ByYearComponent,
    ByAgeComponent,
    LegalComponent,
    DataComponent,
    CollectionComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatSelectModule,
    MatRadioModule,
    MatListModule,
    MatSidenavModule,
    MatDialogModule,

  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getSpanishPaginatorIntl() }],
  bootstrap: [AppComponent]
})
export class AppModule { }
