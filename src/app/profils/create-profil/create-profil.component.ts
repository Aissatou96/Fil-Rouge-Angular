import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ProfilService } from '../../services/profil.service';

@Component({
  selector: 'app-create-profil',
  templateUrl: './create-profil.component.html',
  styleUrls: ['./create-profil.component.css']
})
export class CreateProfilComponent implements OnInit {

  form: FormGroup;

  constructor(
    private profilService : ProfilService,
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
    this.profilService.create(this.form.value).subscribe(res => {
         console.log('Profil created successfully!');
         this.router.navigateByUrl('profils');
    })
  }

}
