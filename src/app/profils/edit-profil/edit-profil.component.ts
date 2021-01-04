import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Profil } from '../profil';
import { ProfilService } from '../../services/profil.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  id: number;
  profil: Profil;
  form: FormGroup;

  constructor(
    public profilService:ProfilService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['postId'];
      this.profilService.find(this.id).subscribe((data: Profil)=>{
        this.profil = data;
      });
      
      this.form = new FormGroup({
        libelle: new FormControl('', [Validators.required])
      });
    }
     
    get f(){
      return this.form.controls;
    }
       
    submit(){
      console.log(this.form.value);
      this.profilService.update(this.id, this.form.value).subscribe(res => {
           console.log('Profil updated successfully!');
           this.router.navigateByUrl('profils');
      })
    }

}
