//core imports
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

//firebase imports
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule } from 'angularfire2/database'

//app imports
import { environment } from '../environments/environment'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { SendMsgFormComponent } from './send-msg-form/send-msg-form.component'

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
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
