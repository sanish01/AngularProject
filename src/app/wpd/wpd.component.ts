import { Component, OnInit } from '@angular/core';
import { persondetail} from '../modal/person.module';

@Component({
  selector: 'app-wpd',
  templateUrl: './wpd.component.html',
  styleUrls: ['./wpd.component.css']
})
export class WpdComponent implements OnInit {

  persons: persondetail [] = [
    {
    id: 1,
    name: 'Songoku',
    gender: 'Male',
    experience: '2 years experience in xyz company as a junior assistant.',
    highestdegree: "Bachelor's in computer science",
    hobbies: 'Reading nobels, Travellng, Yoga', 
    }];

  constructor() { }

  ngOnInit() {
  }

}
