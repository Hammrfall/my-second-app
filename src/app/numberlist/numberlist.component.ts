import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numberlist',
  templateUrl: './numberlist.component.html',
  styleUrls: ['./numberlist.component.css']
})
export class NumberlistComponent implements OnInit {
  displayText: boolean;
  clicks = []
  masterValue: number = 0
  constructor() { }
  
  ngOnInit() {
    this.displayText = false;
  }
  toggleText(){
    this.displayText = !this.displayText;
    this.clicks.push(++this.masterValue);
  }
  getColor(click){
    return (click >=5) ?  'blue': 'white';
  }

}

