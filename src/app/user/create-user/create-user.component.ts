import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { User } from '../models/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userForm : FormGroup;
  user:any;

  constructor(private service: DataService, private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.initUserForm();
   }

   initUserForm(){
      this.userForm = this.formBuilder.group({
        avatar:this.formBuilder.control(""),
        prenom:this.formBuilder.control(""),
        nom:this.formBuilder.control(""),
        email:this.formBuilder.control(""),
        username:this.formBuilder.control(""),
        password:this.formBuilder.control(""),
        statut:this.formBuilder.control(""),
        profil:this.formBuilder.control("")

      });
   }

   createUser(user):void{
      this.service.create(user)
        .subscribe(response=>{
          console.log(response);
        })
   }

   updateUser(){

   }

   deleteUser(){

   }

}
