import { Component, OnInit, Input, ViewChild } from '@angular/core'
import { AngularFireList } from 'angularfire2/database'
import { Message } from '../shared/message.model'
import { Observable } from 'rxjs'
import { MessageService } from '../shared/message.service'

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  @ViewChild('scrollable')scrollable
  messagesObservable: Observable<{}[]>
  constructor(private msgSrv: MessageService) { }

  ngOnInit() {
    this.messagesObservable = this.msgSrv.getMessageList()
    console.log('ngoninit')
    this.scrollToBottom()
  }

  ngAfterViewInit() {
    console.log('ngafterviewinit')
    this.scrollToBottom()
  }

  scrollToBottom(): void {
    try {
      console.log(this.scrollable.nativeElement.scrollTop)
      this.scrollable.nativeElement.scrollTop = this.scrollable.scrollHeight
    } catch(err) {
      console.log(err)
    }
  }
}