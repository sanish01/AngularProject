import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MUSTMATCH} from '../validator/mustmatch.validator';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.register = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      password: ['', Validators.required],
      cnfpassword:['', Validators.required,]
    }, {
      validator: MUSTMATCH.mustMatch ('password','cnfpassword')
    });
  }

  get f() {
    return (this.register.controls);
  }


  onsubmit() {
    this.submitted = true;
    if (this.register.invalid) {
     return;
    }

    alert('successful !!!!');
    console.log(this.register.value);
  }
  

}

