import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})

export class SuccessAlertComponent implements OnInit {
  userName: string;
  userNameState: boolean;


  constructor() { }

  ngOnInit() {
    this.userName = "";
    this.isEmpty()
  }
  isEmpty(){
    if (this.userName == ""){this.userNameState= false;} else{this.userNameState= true;} 
  }
  checkChange(){
    this.isEmpty()
  }
  resetUserName(){
    this.userName = "";
    this.isEmpty()
  }
}
