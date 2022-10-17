import { Component } from '@angular/core';
import { ChatBotService } from './services/chat-bot.service';
import { UserService } from './services/user.service';
import '@cds/core/icon/register.js';
import '@cds/core/icon/register.js';
import { ClarityIcons, logoutIcon, talkBubblesIcon, chatBubbleIcon } from '@cds/core/icon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    ChatBotService,
    UserService
  ]
})
export class AppComponent {
  loggedIn: boolean = false;

  constructor(public userService: UserService) {ClarityIcons.addIcons(logoutIcon, talkBubblesIcon, chatBubbleIcon );}

  logout() {
    this.userService.logout();
  }
}
