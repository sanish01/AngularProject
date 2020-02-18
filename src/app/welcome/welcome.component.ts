import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  welcomeForm: FormGroup;
  submitted=false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.welcomeForm = this.fb.group({
      phone: ['', [Validators.required]],
      experience: [''],
      degree: ['', Validators.required],
      hobbies: ['']
    });
  }

  get f() {
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
