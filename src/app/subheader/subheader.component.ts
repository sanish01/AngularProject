import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.css']
})
export class SubheaderComponent implements OnInit {
 logourl="assets/Images/u.png";
 profileurl="assets/Images/s.svg";

  constructor() { }

  ngOnInit() {
  }

}
