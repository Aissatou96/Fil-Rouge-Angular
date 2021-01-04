import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateProfilComponent } from 'src/app/profils/create-profil/create-profil.component';
import {ListProfilsComponent} from 'src/app/profils/list-profils/list-profils.component';
import {DetailProfilComponent} from 'src/app/profils/detail-profil/detail-profil.component';
import {EditProfilComponent} from 'src/app/profils/edit-profil/edit-profil.component';
import {LoginComponent} from 'src/app/login/login.component';
import { HomeComponent } from 'src/app/home/home.component';


const routes: Routes = [
 
  { path:"login", component: LoginComponent},
  { path:"home", component: HomeComponent} ,
  { path: 'addProfil', component: CreateProfilComponent },
  { path: 'profils', component: ListProfilsComponent },
  { path: 'profil/:id/detail', component: DetailProfilComponent },  
  { path: 'profil/:id/edit', component: EditProfilComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'}
  

 
  // {path:"addUser", component: CreateUserComponent},
  // {path:"listUsers", component: ListUsersComponent},
  // {path:"addProfil", component:CreateProfilComponent},
  // {path:"listProfils", component:ListProfilsComponent},
  // {path:"addPrSortie", component:CreateProfilSortieComponent},
  // {path:"listPrSortie", component:ListProfilsSortieComponent},
  // {path:"addComp", component:CreateCompetenceComponent},
  // {path:"listComp", component:ListCompetencesComponent},
  // {path:"addGrpComp", component:CreateGrpCompComponent},
  // {path:"listGrpComp", component:ListGrpCompComponent},
  // {path:"addRef", component:CreateReferentielComponent},
  // {path:"listRefs", component:ListReferentielsComponent},
  // {path:"addPromo", component:CreatePromoComponent},
  // 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
