import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profil } from '../profil';
import { ProfilService } from '../../services/profil.service';

@Component({
  selector: 'app-detail-profil',
  templateUrl: './detail-profil.component.html',
  styleUrls: ['./detail-profil.component.css']
})
export class DetailProfilComponent implements OnInit {

  id: number;
  profil: Profil;

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
  }

}
