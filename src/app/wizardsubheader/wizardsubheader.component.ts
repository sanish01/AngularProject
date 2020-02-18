import { Component, OnInit } from '@angular/core';
import { ModalService} from '../modal/modal.service'

@Component({
  selector: 'app-wizardsubheader',
  templateUrl: './wizardsubheader.component.html',
  styleUrls: ['./wizardsubheader.component.css']
})
export class WizardsubheaderComponent implements OnInit {
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
