import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false,
})
export class AppComponent implements OnInit {
  title = 'front-angular-socket-poc';

  constructor(public swService: WebsocketService) {}

  ngOnInit(): void {
    console.log('hola');
  }
}
