import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  //The messageService is public because we are going to use it in the html
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {}
}
