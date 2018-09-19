import { Component } from '@angular/core';
import{ MessageServiceProvider} from '../../providers/message-service/message-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  messageList = [];

  constructor(private messageService:MessageServiceProvider) {
this.getMessages();
  }
  getMessages(){
    this.messageService.getMessages().subscribe(data=> this.messageList=data);
  }

}
