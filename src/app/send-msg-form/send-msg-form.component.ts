import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-send-msg-form',
  templateUrl: './send-msg-form.component.html',
  styleUrls: ['./send-msg-form.component.css']
})
export class SendMsgFormComponent implements OnInit {

  sender: string = 'crelbin'
  msg: string = 'message'

  constructor() { }

  ngOnInit() {
  }

}
