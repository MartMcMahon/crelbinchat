//core imports
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

//firebase imports
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule, AngularFireList, AngularFireObject } from 'angularfire2/database'

//material imports
import { MatButtonModule } from '@angular/material'
import { MatInputModule } from '@angular/material/input'

//app imports
import { environment } from '../environments/environment'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component'
import { DialogBoxComponent } from './dialog-box/dialog-box.component'
import { SendMsgFormComponent } from './send-msg-form/send-msg-form.component'
import { MessageService } from './shared/message.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DialogBoxComponent,
    SendMsgFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    MatButtonModule,
    MatInputModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
