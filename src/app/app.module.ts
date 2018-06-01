//core imports
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ServiceWorkerModule } from '@angular/service-worker'

//firebase imports
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule, AngularFireList, AngularFireObject } from 'angularfire2/database'

//material imports
import { MatButtonModule } from '@angular/material'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'

//app imports
import { appRouting } from './app-routing.module'
import { AppComponent } from './app.component'
import { DialogBoxComponent } from './dialog-box/dialog-box.component'
import { environment } from '../environments/environment'
import { LitAuthService } from './shared/litauth.service'
import { LoginComponent } from './users/login/login.component'
import { MessageService } from './shared/message.service'
import { NavbarComponent } from './navbar/navbar.component'
import { SendMsgFormComponent } from './send-msg-form/send-msg-form.component'
import { UsersComponent } from './users/users.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DialogBoxComponent,
    SendMsgFormComponent,
    UsersComponent,
    LoginComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    appRouting,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    NgbModule.forRoot(),
    ServiceWorkerModule.register('/combined-worker.js', { enabled: environment.production })
  ],
  providers: [
    MessageService,
    LitAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
