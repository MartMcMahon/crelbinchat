import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { 
  AngularFireDatabase, 
  AngularFireList,
  AngularFireObject
} from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase'
import { StringFormat } from '@firebase/storage-types';

const usersPath: string = 'users/'

@Injectable({
  providedIn: 'root'
})
export class LitAuthService {
  public authInfo: Observable<firebase.User>
  public user

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase) { 
    this.authInfo = this.afAuth.authState
  }

  login(provider) {
    let prom
    switch(provider) {
      case 'google':
        prom = this.loginWithGoogle()
        break
      case 'anon':
        prom = this.loginAnon()
        break
    }
    
    prom.then(authInfo => {
        console.log('signed in anonymously')
        this.user = this.db.object(usersPath + authInfo.user.uid)
      })
      .then(() => {
        //does user exist?
        if (this.user) {
          //set name to this.user.sender
          let sender = this.user.query.sender
          console.log(sender)

          //set other user stats
        }
        else {
          console.log('hello, new crelbin')
          this.updateName('crelbin')
          return
        }
      })
      .catch(err => {
        console.log(err)
      })    
  }

  loginAnon() {
    return this.afAuth.auth.signInAnonymously()
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  logout() {
    this.afAuth.auth.signOut()
      .then(() => {
        console.log('logged out')
      })
  }

  getUserList(): Observable<{}[]> {
    return this.db.list(usersPath).valueChanges()
  }

  updateName(name: string) {
    let obj = {}
    obj['sender'] = name
    obj['timestamp'] = Date.now()
    obj['status'] = 'online'
    obj['uid'] = this.user.query.key
    this.user.update(obj)
  }

}
