import { Component, OnInit } from '@angular/core';
import { persondetail } from '../modal/person.module';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  persons: persondetail[]= [
    {
    id: 1,
    name: 'Edison',
    gender: 'Male',
    experience: '2 years experience in xyz company as a senior software developer.',
    highestdegree: 'Masters in computer science',
    hobbies: 'Reading nobels, coding,singing',
    motivation:'I want to spread kowledge to all who are in need.' 
    },
    /*{
      id: 2,
      name:'Ema',
      gender: 'Female',
      experience: '2 years experience in xyz company as a senior software developer.',
      highestdegree: 'Masters in computer science',
      hobbies: 'Reading nobels, coding,singing',
      motivation:'spread the knowledge' 
      },
      {
        id: 3,
        name:'OOO',
        gender: 'Female',
        experience: '2 years experience in xyz company as a senior software developer.',
        highestdegree: 'Masters in computer science',
        hobbies: 'Reading nobels, coding,singing',
        motivation:'spread the knowledge' 
        }*/

  ];

  constructor() { }

  ngOnInit() {
  }

}
