import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {ProfilSortieService} from '../../services/profil-sortie.service';

@Component({
  selector: 'app-create-profil-sortie',
  templateUrl: './create-profil-sortie.component.html',
  styleUrls: ['./create-profil-sortie.component.css']
})
export class CreateProfilSortieComponent implements OnInit {

  form: FormGroup;

  constructor(
    private profilSortieService : ProfilSortieService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      libelle: new FormControl('', [Validators.required])
    });
  }
   
  get f(){
    return this.form.controls;
  }
    
  submit(){
    console.log(this.form.value);
    this.profilSortieService.create(this.form.value).subscribe(res => {
         console.log('Profil created successfully!');
         this.router.navigateByUrl('profils');
    })
  }


}
