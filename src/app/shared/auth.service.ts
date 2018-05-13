import { Injectable } from '@angular/core'
// import { Message } from './message.model'
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
  usersRef = null
  userId: string 
  
  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) { 
    this.userId = "1"
    this.usersRef = this.db.list(this.usersPath)

    // this.afAuth.authState
    //   .do(user => {
    //     if (user) {
    //       this.userId = user.uid
    //       this.updateOnConnect()
    //     }
    //   })
  }
  
  signedOn(sender: string) {
    let res = this.usersRef.push(sender)
    this.userId = res.key
    console.log(this.userId)
  }

  // signOff(userId: string) {
  //   this.usersRef.update({})
  //   var removeCapital = cityRef.update({
  //     capital: firebase.firestore.FieldValue.delete()
  // });

  // }


  // createMessage(message: Message) {
	// 	this.db.list(this.messagePath).push(message)
	// 		// .catch(error => this.handleError(error))
	// }


  // private updateStatus(status: string) {
  //   if (!this.userId) return
  //   this.db.object('users/' + this.userId).update({ status: status })
  // }

  // /// Updates status when connection to firebase starts
  // private updateOnConnect() {
  //   return this.db.object('.info/connected').valueChanges
  //   .do(connected => {
  //       let status = connected.$value ? 'online' : 'offline'
  //     })

  // }

}
