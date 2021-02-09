import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users : User[] = [];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe((data: User[])=>{
      this.users = data['hydra:member'];
      console.log(this.users);
    })  
  }
  
  deleteUser(id){
    this.userService.delete(id).subscribe(res => {
         this.users = this.users.filter(item => item.id !== id);
         console.log('User deleted successfully!');
    })
  }

}
