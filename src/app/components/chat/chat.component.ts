import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  standalone: false,
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent implements OnInit, OnDestroy {
  public text: string = '';
  public messageSubscription!: Subscription;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.messageSubscription = this.chatService
      .getMessage()
      .subscribe((msg) => {
        console.log(msg);
      });
  }

  ngOnDestroy(): void {
    this.messageSubscription.unsubscribe();
  }

  sendMessage() {
    if (this.text === '') return;
    this.chatService.sendMessage(this.text);
    this.cleanMessage();
  }

  cleanMessage() {
    this.text = '';
  }
}
