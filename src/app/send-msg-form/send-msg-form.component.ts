import { Component, OnInit, Input } from '@angular/core'
import { AuthService } from '../shared/auth.service'
import { MessageService } from '../shared/message.service'

@Component({
  selector: 'app-send-msg-form',
  templateUrl: './send-msg-form.component.html',
  styleUrls: ['./send-msg-form.component.css']
})
export class SendMsgFormComponent implements OnInit {

  sender: string = 'crelbin'
  @Input() body: string = 'message'
  message = {
    "sender": this.sender,
    "body": this.body,
    "timeStamp": new Date()
  }

  constructor(private authSrv: AuthService, private msgSrv: MessageService) { }

  ngOnInit() {
    this.authSrv.signedOn(this.sender)
  }

  onSend() {
    this.message = {
      "sender": this.sender,
      "body": this.body,
      "timeStamp": new Date()
    }
    this.msgSrv.createMessage(this.message)
  }
  
}
