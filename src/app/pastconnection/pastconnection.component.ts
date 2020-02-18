import { Component, OnInit } from '@angular/core';
import {ModalService} from '../modal'

@Component({
  selector: 'app-pastconnection',
  templateUrl: './pastconnection.component.html',
  styleUrls: ['./pastconnection.component.css']
})
export class PastconnectionComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }
  openModal(id: string){
    this.modalService.open(id);
  }

  closeModal(id: string){
    this.modalService.close(id);
  }

}
