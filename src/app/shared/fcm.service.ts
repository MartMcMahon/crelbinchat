import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { 
  AngularFireDatabase, 
  AngularFireList,
  AngularFireObject
} from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase'

import { Message } from './message.model'
// import { FirebaseMessaging } from '@firebase/messaging-types'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class fcmService {
	public obs: Observable<any>
	
	private messaging

  constructor(private afAuth: AngularFireAuth,
							private db: AngularFireDatabase)
							// private messaging: FirebaseMessaging)
		{
			this.messaging = firebase.messaging()
			this.messaging.usePublicVapidKey(environment.PUBLIC_VAPID_KEY)
	}

  receiveMessage(message: Message) {
		console.log(message)
		
	}

	subsribeToPushes() {
		console.log('subscribe')
		this.messaging.onMessage((msg) => { console.log(msg) })
	}
}