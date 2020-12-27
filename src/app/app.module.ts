import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { DetailUserComponent } from './user/detail-user/detail-user.component';
import { ListUsersComponent } from './user/list-users/list-users.component';
import { ItemUserComponent } from './user/list-users/item-user/item-user.component';
import { CreateCompetenceComponent } from './competences/create-competence/create-competence.component';
import { ListCompetencesComponent } from './competences/list-competences/list-competences.component';
import { CreateGrpCompComponent } from './groupe-competences/create-grp-comp/create-grp-comp.component';
import { ListGrpCompComponent } from './groupe-competences/list-grp-comp/list-grp-comp.component';
import { CreateProfilComponent } from './profils/create-profil/create-profil.component';
import { ListProfilsComponent } from './profils/list-profils/list-profils.component';
import { CreateProfilSortieComponent } from './profils-sortie/create-profil-sortie/create-profil-sortie.component';
import { ListProfilsSortieComponent } from './profils-sortie/list-profils-sortie/list-profils-sortie.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CreateReferentielComponent } from './referentiel/create-referentiel/create-referentiel.component';
import { ListReferentielsComponent } from './referentiel/list-referentiels/list-referentiels.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CreateUserComponent,
    DetailUserComponent,
    ListUsersComponent,
    ItemUserComponent,
    CreateCompetenceComponent,
    ListCompetencesComponent,
    CreateGrpCompComponent,
    ListGrpCompComponent,
    CreateProfilComponent,
    ListProfilsComponent,
    CreateProfilSortieComponent,
    ListProfilsSortieComponent,
    SidebarComponent,
    CreateReferentielComponent,
    ListReferentielsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
