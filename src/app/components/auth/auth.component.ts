import {TemplateRef, ViewChild} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../service/service.service';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [UserService]
})
export class AuthComponent implements OnInit {
  // public img any;
  @ViewChild('readOnlyTemplate', {static: false}) readOnlyTemplate: TemplateRef<any>|undefined;
  @ViewChild('editTemplate', {static: false}) editTemplate: TemplateRef<any>|undefined;
  editedUser: User|null = null;
  users: Array<User>;
  isNewRecord: boolean;
  imgIcon: boolean = false;
  img: any;
  passwordVisibility: boolean = false;

  constructor(public svc: ServiceService , public router: Router, private serv: UserService) {
    this.users = new Array<User>();
  }
  ngOnInit(): void {
    this.loadUsers();
    this.addUser();
    this.svc.enterData();
    // this.svc.user = null;
  }

  private loadUsers(): void{
    this.serv.getUsers().subscribe((data: Array<User>) => {
      this.users = data;
    });
  }

  addUser(): void{
    this.editedUser = new User('', '', null , null);
    this.users.push(this.editedUser);
    this.isNewRecord = true;
  }

  editUser(user: User): void{
    this.editedUser = new User(user._id, user.email, user.password , user.img);
  }
  // tslint:disable-next-line:typedef
  loadTemplate(user: User) {
    if (this.editedUser && this.editedUser._id === user._id) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }
  saveUser(): void{
    if (this.isNewRecord) {
      this.serv.createUser(this.editedUser as User).subscribe(data => {
        this.loadUsers();
      });
      this.isNewRecord = false;
      this.editedUser = null;
    } else {
      this.serv.updateUser(this.editedUser as User).subscribe(data => {
        this.loadUsers();
      });
      this.editedUser = null;
    }
  }
  cancel(): void{
    // если отмена при добавлении, удаляем последнюю запись
    if (this.isNewRecord) {
      this.users.pop();
      this.isNewRecord = false;
    }
    this.editedUser = null;
  }
  deleteUser(user: User): void{
    this.serv.deleteUser(user._id).subscribe(data => {
      this.loadUsers();
    });
  }

  public products = [
    {
      id: 1,
      imgUrl: '',
      imgBase64Data: ''
    },
  ];

  public onFileUpdate(event, index): void{
    this.imgIcon = true;
    const files = event.target.files;
    if (files.length === 0) {
      return;
    }
    const reader = new FileReader();

    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
      this.products[index].imgBase64Data = reader.result as string;
      this.img = this.products;
      console.log(this.img);
    };
  }
}
