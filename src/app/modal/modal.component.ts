import { Component, OnInit, ViewEncapsulation, OnDestroy, Input, ElementRef } from '@angular/core';
import { ModalService } from './modal.service'

@Component({
  selector: 'ss-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  @Input('.ss-modal')
  private element: any;


  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    if (!this.id) {
      console.error('module must have an id');
      return;
    }
    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    /*this.element.addEventListener('click', el => {
      if (el.target.className === 'ss-modal') {
        this.close();
      }
    });*/

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }
  // open modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('ss-modal-open');
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('ss-modal-open');
  }

}

