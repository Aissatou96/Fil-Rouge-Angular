import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCompetenceComponent } from './competences/create-competence/create-competence.component';
import { ListCompetencesComponent } from './competences/list-competences/list-competences.component';
import { CreateGrpCompComponent } from './groupe-competences/create-grp-comp/create-grp-comp.component';
import { ListGrpCompComponent } from './groupe-competences/list-grp-comp/list-grp-comp.component';
import { LoginComponent } from './login/login.component';
import { CreateProfilSortieComponent } from './profils-sortie/create-profil-sortie/create-profil-sortie.component';
import { ListProfilsSortieComponent } from './profils-sortie/list-profils-sortie/list-profils-sortie.component';
import { CreateProfilComponent } from './profils/create-profil/create-profil.component';
import { ListProfilsComponent } from './profils/list-profils/list-profils.component';
import { CreateReferentielComponent } from './referentiel/create-referentiel/create-referentiel.component';
import { ListReferentielsComponent } from './referentiel/list-referentiels/list-referentiels.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { ListUsersComponent } from './user/list-users/list-users.component';

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"addUser", component: CreateUserComponent},
  {path:"listUsers", component: ListUsersComponent},
  {path:"addProfil", component:CreateProfilComponent},
  {path:"listProfils", component:ListProfilsComponent},
  {path:"addPrSortie", component:CreateProfilSortieComponent},
  {path:"listPrSortie", component:ListProfilsSortieComponent},
  {path:"addComp", component:CreateCompetenceComponent},
  {path:"listComp", component:ListCompetencesComponent},
  {path:"addGrpComp", component:CreateGrpCompComponent},
  {path:"listGrpComp", component:ListGrpCompComponent},
  {path:"addRef", component:CreateReferentielComponent},
  {path:"listRefs", component:ListReferentielsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
