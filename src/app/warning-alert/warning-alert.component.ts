import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
 servers = []
 allowNewServer: boolean = false;
 serverCreationStatus: string ='No server has been created';
  constructor() {
    setTimeout(()=>{this.allowNewServer = true;},3000)
   }
    
  ngOnInit() {
    this.servers.push({id: 1, name : 'bob', status: 'online', function: 'mail'})
  }
  onCreateServer(){
    this.serverCreationStatus = "A new server was created"
  }
  onUpdateServerName(e: Event){ //Note the html element that just helps our environment.  Code does not create ana error without it.
    this.servers[0].name = (<HTMLInputElement>e.target).value;
  }

}
