import { Component } from '@angular/core'
import { fcmService } from '../shared/fcm.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private fcm: fcmService, 
    // private newsletterService: NewsletterService
  ) { }

  subscribeToNotifications() {
    this.fcm.subsribeToPushes()
  }

}
