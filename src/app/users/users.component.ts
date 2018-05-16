import { Component, OnInit } from '@angular/core'
import { AngularFireList } from 'angularfire2/database'
import { Observable } from 'rxjs'
import { LitAuthService } from '../shared/litauth.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  usersObservable: Observable<{}[]>

  constructor(private litSrv: LitAuthService) { }

  ngOnInit() {
    this.usersObservable = this.litSrv.getUserList()
  }
}