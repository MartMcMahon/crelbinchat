import { Component, OnInit, Input } from '@angular/core'
import { AngularFireList } from 'angularfire2/database'
import { Message } from '../shared/message.model'
import { MessageService } from '../shared/message.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  messagesObservable: Observable<{}[]>

  constructor(private msgSrv: MessageService) { }

  ngOnInit() {
    // this.messagesObservable = this.getMessages('/dialog/messages')
    this.messagesObservable = this.msgSrv.getMessageList()
  }
}