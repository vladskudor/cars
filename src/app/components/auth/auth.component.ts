import {TemplateRef, ViewChild} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../service/service.service';
import {User} from '../user';
import {UserService} from '../user.service';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [UserService]
})
export class AuthComponent implements OnInit {
  @ViewChild('readOnlyTemplate', {static: false}) readOnlyTemplate: TemplateRef<any>|undefined;
  @ViewChild('editTemplate', {static: false}) editTemplate: TemplateRef<any>|undefined;
  editedUser: User|null = null;
  users: Array<User>;
  isNewRecord: boolean;
  img: any;
  passwordVisibility: boolean = false;

  constructor(public svc: ServiceService ,
              public router: Router,
              private serv: UserService,
              public sanitize: DomSanitizer) {
    this.users = new Array<User>();
  }

  ngOnInit(): void {
    this.loadUsers();
    this.addUser();
    this.svc.enterData();
  }

  private loadUsers(): void{
    this.serv.getUsers().subscribe((data: Array<User>) => {
      this.users = data;
    });
  }

  addUser(): void{
    this.editedUser = new User('', '', null , '');
    this.users.push(this.editedUser);
    this.isNewRecord = true;
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
    // file: FileList - argument
    // const urlToBlob = window.URL.createObjectURL(file);
    // this.img = this.sanitize.bypassSecurityTrustUrl(urlToBlob);
    // this.editedUser.img = this.img;
    localStorage.setItem('user', JSON.stringify(this.editedUser));
    this.router.navigate(['/main', this.editedUser.email, this.editedUser.password]);
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
}
