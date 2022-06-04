import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service/service.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  constructor(public svc: ServiceService) { }

  ngOnInit(): void {
  }

  sendMessage(messageValue): void{
    this.svc.user.messages.push({
      name: this.svc.user.email,
      message: messageValue
    });
    localStorage.setItem('user' , JSON.stringify(this.svc.user));
  }

}
