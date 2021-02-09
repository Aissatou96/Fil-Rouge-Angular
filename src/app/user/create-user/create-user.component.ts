import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userForm:FormGroup;
  options:string[]=['Admin', 'Formateur', 'CM'];

  constructor(
    private userService : UserService,
    private router:Router
    ) { }

  ngOnInit():void {
    this.userForm = new FormGroup({
      'prenom': new FormControl(),
      'nom': new FormControl(),
      'email':new FormControl(),
      'username':new FormControl(),
      'password':new FormControl(),
      'statut':new FormControl(),
      'profil': new FormControl()
    });
   }

   createUser(){
     console.log(this.userForm.value);
    this.userService.create(this.userForm.value).subscribe(res => {
      console.log('User created successfully!');
      this.router.navigateByUrl('users');
    });

  }


  
}
