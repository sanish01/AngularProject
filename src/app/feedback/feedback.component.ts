import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  happy="assets/Images/happy.svg";
  sad="assets/Images/sad.svg";
  public text: string;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }
  
  openModal(id: string){
    this.modalService.open(id);
  }

  closeModal(id: string){
    this.modalService.close(id);
    this.text= '';
  }
  msg(){
    alert("Thankyou for your feedback....")
    console.log(this.text);
    this.text='';
  }


}
