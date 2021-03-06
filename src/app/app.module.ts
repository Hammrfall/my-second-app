import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // To allow two-way data binding

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { NumberlistComponent } from './numberlist/numberlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    NumberlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // To allow two-way data binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
