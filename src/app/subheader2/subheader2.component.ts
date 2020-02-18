import { Component, OnInit } from '@angular/core';
import { ModalService} from '../modal'

@Component({
  selector: 'app-subheader2',
  templateUrl: './subheader2.component.html',
  styleUrls: ['./subheader2.component.css']
})
export class Subheader2Component implements OnInit {
  logourl="assets/Images/u.png";
  profileurl="assets/Images/s.svg";

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }
  
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
