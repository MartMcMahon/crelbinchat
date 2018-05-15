import { Injectable } from '@angular/core'
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth'
import { Observable } from 'rxjs'
import * as firebase from 'firebase/app'
import 'rxjs/add/operator/do'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  usersPath: string = 'users/'
  usersListRef = null
  usersObjRef = null
  connectionRef = null
  userId: string 
  
  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) { 
    this.userId = "1"
    this.usersListRef = this.db.list(this.usersPath)
    this.usersObjRef = this.db.object(this.usersPath)

    this.db.object(this.usersPath + this.userId).query.ref.onDisconnect().update({})

    this.afAuth.authState.do(user => {
      console.log(user)
      // this.updateOnConnect()
      this.updateOnDisconnect()
    })
  }
  
  /**
   * gets triggered at start and adds {userId: sender} to the users document
   */
  signedOn(sender: string) {
    let res = this.usersListRef.push({
      'sender': sender, 
      'timestamp': Date.now()
    })
    this.userId = res.key
  }

  getUserList(): Observable<{}[]> {
    return this.usersListRef.valueChanges()
      .do(changes => {
        changes.map(thing => {

          // console.log(thing)
        })
      })
  }

  updateName(name: string) {
    console.log(name)
    // this.usersObjRef = this.db.object(this.usersPath)
    const userRef = this.db.object(this.usersPath + this.userId)
    let obj = {}
    obj['sender'] = name
    obj['timestamp'] = new Date().toString()
    console.log(obj)
    userRef.update(obj)
  }

  private updateOnDisconnect() {
    console.log('updateondisconnect')
    console.log(firebase.database().ref())
    firebase.database().ref().child('users/' + this.userId)
      .onDisconnect()
      .update({'status': 'offline'})
  }
}
