import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'
import { LitAuthService } from '../shared/litauth.service'
import { MessageService } from '../shared/message.service'

@Component({
  selector: 'app-send-msg-form',
  templateUrl: './send-msg-form.component.html',
  styleUrls: ['./send-msg-form.component.css']
})
export class SendMsgFormComponent implements OnInit {

  @Input() sender: string = 'crelbin'
  @Input() body: string = 'message'

  @Output() nameChanged = new EventEmitter<{sender: string}>()

  message = {
    "sender": this.sender,
    "body": this.body,
    "timeStamp": Date.now()
  }

  constructor(private litSrv: LitAuthService,
              private msgSrv: MessageService) { }

  ngOnInit() {
    // this.authSrv.signedOn(this.sender)
    // this.litSrv.login()
  }

  onSend() {
    this.message = {
      "sender": this.sender,
      "body": this.body,
      "timeStamp": Date.now()
    }
    this.msgSrv.createMessage(this.message)
    .then(() => {
      this.body = ''
    })
  }

  // onNameChanged(e: {sender: string}) {
  onNameChanged(e) {
    // this.authSrv.updateName(this.sender)
    this.litSrv.updateName(this.sender)
  }
  
}
