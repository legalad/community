import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForumsService } from '../forums/services/forums.service';
import '@cds/core/icon/register.js';
import { ClarityIcons, windowCloseIcon} from '@cds/core/icon';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  users!: any[];
  talkTo!: string;

  constructor(private forumsService: ForumsService, private router: Router) {ClarityIcons.addIcons(windowCloseIcon) }

  ngOnInit() {
    this.users = this.forumsService.users;
  }

  close() {
    this.router.navigate([{outlets: {chat: null}}]);
  }
}
