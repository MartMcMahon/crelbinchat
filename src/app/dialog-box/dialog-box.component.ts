import { Component, OnInit } from '@angular/core'
import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  messagesObservable: Observable<any[]>
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.messagesObservable = this.getMessages('/dialog/messages')
  }

  getMessages(path): Observable<any[]> {
    return this.db.list(path).valueChanges()
  }

}
