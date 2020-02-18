import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-welcomewizard',
  templateUrl: './welcomewizard.component.html',
  styleUrls: ['./welcomewizard.component.css']
})
export class WelcomewizardComponent implements OnInit {
  welcomeForm: FormGroup;
  submitted = false;

  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.welcomeForm = this.fb.group({
      phone: ['', [Validators.required]],
      experience: [''],
      degree: ['', Validators.required],
      hobbies: [''],
      motivation: ['', Validators.required]
    });
  }
  get f(){
    return (this.welcomeForm.controls);
  }

  onsubmit() {
    this.submitted= true;
    if (this.welcomeForm.invalid) {
      return;
    }
    alert('submitted');
  }

    show(): void {
      console.log(this.welcomeForm.value);
    }

}
