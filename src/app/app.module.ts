//core imports
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

//firebase imports
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule, AngularFireList, AngularFireObject } from 'angularfire2/database'

//material imports
import { MatButtonModule } from '@angular/material'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'

//app imports
import { environment } from '../environments/environment'
import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { DialogBoxComponent } from './dialog-box/dialog-box.component'
import { SendMsgFormComponent } from './send-msg-form/send-msg-form.component'
import { MessageService } from './shared/message.service'
import { UsersComponent } from './users/users.component'
import { LoginComponent } from './users/login/login.component'
import { appRouting } from './app-routing.module'
import { LitAuthService } from './shared/litauth.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DialogBoxComponent,
    SendMsgFormComponent,
    UsersComponent,
    LoginComponent
  ],
  imports: [
    appRouting,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    NgbModule.forRoot(),
    MatButtonModule,
    MatInputModule,
    MatListModule
  ],
  providers: [
    MessageService,
    LitAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
