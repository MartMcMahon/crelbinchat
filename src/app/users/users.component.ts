import { Component, OnInit } from '@angular/core'
import { AngularFireList } from 'angularfire2/database'
import { Observable } from 'rxjs'
import { AuthService } from '../shared/auth.service'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  usersObservable: Observable<{}[]>

  constructor(private authSrv: AuthService) { }

  ngOnInit() {
    this.usersObservable = this.authSrv.getUserList()
  }
}