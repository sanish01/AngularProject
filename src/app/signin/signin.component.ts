import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'ngbd-modal-Content',
  template: `
      <div>
        <div class="modal-body">
        <button type="button" class="btn" style="margin:0 10px 0 30px; width:auto; background-color:#015b70; color:white;" routerLink='/registerwizard' (click)="activeModal.close('Close click')">Wizard</button>
        <button type="button" class="btn" style="margin:0 10px 0 30px; width:auto;background-color:#015b70; color:white;" routerLink='/register' (click)="activeModal.close('Close click')" >Protegee</button>
        </div>
        <div class="modal-footer">
          <button type="button" (click)="activeModal.close('Close click')" style="width:auto; background-color:#015b70; color:white;">Close</button>
        </div>
      </div>
  `,
  
})

export class NgbdModalContent{
  constructor(public activeModal:NgbActiveModal){}
  
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  submitted= false;


  constructor(private fb: FormBuilder, private modalservice:NgbModal) { }

  ngOnInit() {
    this.signinForm= this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onclick() {
    this.submitted = true;

    if (this.signinForm.invalid) {
      return;
    }

    alert('login successfull!!!');
  }
  
  open(){
    const modelref= this.modalservice.open(NgbdModalContent);
  }
}


