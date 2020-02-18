import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  public text: string

  constructor() { }

  ngOnInit() {

  }

  show(): void{
    console.log(this.text);
    this.text='';
    }

  clr(): void{
    this.text= '';
  }

}
