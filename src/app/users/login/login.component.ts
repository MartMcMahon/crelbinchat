import { Component, OnInit } from '@angular/core'
import { LitAuthService } from '../../shared/litauth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: LitAuthService) { }

  ngOnInit() {
    this.auth.login('anon')
  }

  login(sender: string) { 
    this.auth.login(sender)
  }

  loginButton() {
    this.auth.login('google')
  }
  
  logout() { 
    this.auth.logout()
   }

}
