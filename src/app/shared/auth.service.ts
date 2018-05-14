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

  



    // this.userRef = this.db.object(this.usersPath + this.userId)
    // this.userRef.ref.onDisconnect().udpate({})

    // let donuts = this.db.object(`DONUTS`)
    // donuts.query.ref.onDisconnect().set(false)
  }
  
  /**
   * gets triggered at start and adds {userId: sender} to the users document
   */
  signedOn(sender: string) {
    let res = this.usersListRef.push({
      'sender': sender, 
      'timestamp': new Date().toString()
    })
    this.userId = res.key
  }

  // signOff(userId: string) {
  //   return this.db.object(this.usersPath + userId).update({})
  // }

  getUserList(): Observable<{}[]> {
    return this.usersListRef.valueChanges()
  }

  updateName(name: string) {
    // this.usersObjRef = this.db.object(this.usersPath)
    const userRef = this.db.object(this.usersPath + this.userId)
    let obj = {}
    obj['sender'] = name
    obj['timestamp'] = new Date().toString()
    userRef.update(obj)
  }

  // ngOnDestory() {
  //   console.log('on Destroy')
  //   this.db.object(this.usersPath + this.userId).update({'status': 'offline'})
  //   // let offlineUser = {
  //   //   'sender': this.sender
  //   // }
  //   // this.db.object(this.usersPath + this.userId).query.ref.onDisconnect().update({})
  //   // offlineUser[]
  //   // this.db.object(this.usersPath + this.userId).update({})
  // }

  // private updateOnConnect() {
  //   return this.db.object('.info/connected').valueChanges()
  // }

  private updateOnDisconnect() {
    console.log('updateondisconnect')
    console.log(firebase.database().ref())
    firebase.database().ref().child('users/' + this.userId)
      .onDisconnect()
      .update({'status': 'offline'})
  }
}
