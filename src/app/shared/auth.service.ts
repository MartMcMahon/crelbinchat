import { Injectable } from '@angular/core'
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth'
import { Router } from '@angular/router'
import * as firebase from 'firebase/app'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/switchMap'


const userTimeout = 300000 //5 mins

interface User {
  uid: string
  email: string
  phptoUrl?: string
  displayName?: string
  crelbinName?: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>
  
  usersPath: string = 'users/'
  usersListRef = null
  usersObjRef = null
  connectionRef = null
  userId: string 
  authState
  
  constructor(private afAuth: AngularFireAuth, 
              private db: AngularFireDatabase, private router: Router) { 

    this.user = this.afAuth.authState
      .switchMap(user => {
        if (user) {
          return this.db.object<User>(`users/${user.uid}`).valueChanges()
        }
        else {
          return Observable.of(null)
        }
      })

    this.userId = "1"
    this.usersListRef = this.db.list(this.usersPath)
    this.usersObjRef = this.db.object(this.usersPath)

    // this.db.object(this.usersPath + this.userId).query.ref.onDisconnect().update({})


    // this.afAuth.authState.pipe(first())
    // this.afAuth.authState.do(user => {
    //   console.log(user)
    //   this.updateOnConnect()
    //   this.updateOnDisconnect()
    // })
  }
  
  /**
   * gets triggered at start and adds {userId: sender} to the users document
   */
  signedOn(sender: string) {
    let res = this.usersListRef.push({
      'sender': sender, 
      'timestamp': Date.now(),
      'status': 'online',
    })
    this.userId = res.key
    // res.onDisconnect()
  }

  getUserList(): Observable<{}[]> {
    return this.usersListRef.valueChanges()
      // .do(changes => {
      //   changes.map(user => {
      //     if (user.timestamp < Date.now() - 30000) { //userTimeout) {
      //       // bloc.push(user.key)
      //       // console.log(user)
      //       // console.log(user.key)
      //     }
          

          // console.log(thing)
        // })
      // })
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

  private updateOnConnect() {
    let con = this.db.object('.info/connected')
    console.log(con)
  }

  private updateOnDisconnect() {
    console.log('updateondisconnect')
    console.log(firebase.database().ref())
    firebase.database().ref().child('users/' + this.userId)
      .onDisconnect()
      .update({'status': 'offline'})
  }

  get authenticated(): boolean {
    return this.authState !== null
  }

  get currentUser(): any {
    return this.authenticated ? this.authState.auth : null
  }

}
