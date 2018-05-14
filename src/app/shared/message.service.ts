import { Injectable } from '@angular/core'
import { Message } from './message.model'
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database'
import { Observable } from 'rxjs'

@Injectable()
export class MessageService {

	private messagePath: string = '/dialog/messages'

	messagesObservable: Observable<{}[]>
	messages: AngularFireList<Message> = null
	message: AngularFireObject<Message> = null

	constructor(private db: AngularFireDatabase) { }

	getMessageList(): Observable<{}[]> {
		this.messagesObservable = this.db.list(this.messagePath).valueChanges()
		return this.messagesObservable
	}

	// getMessage(key: string): AngularFireObject<Message> {
	// 	const messagePath = `${this.basePath}/${key}`a
	// 	this.message = this.db.object(messagePath)
	// 	return this.message
	// }

	createMessage(message: Message) {
		return this.db.list(this.messagePath).push(message)
			// .catch(error => this.handleError(error))
	}


	
}