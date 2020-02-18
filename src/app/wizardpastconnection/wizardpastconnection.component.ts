import { Component, OnInit } from '@angular/core';
import { ModalService} from '../modal/modal.service'


@Component({
  selector: 'app-wizardpastconnection',
  templateUrl: './wizardpastconnection.component.html',
  styleUrls: ['./wizardpastconnection.component.css']
})


export class WizardpastconnectionComponent implements OnInit {

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
